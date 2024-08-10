import {
  useEffect,
  useState,
  Children,
  cloneElement,
  useCallback,
  useRef,
} from 'react';
import propTypes from 'prop-types';

Slider.propTypes = {
  children: propTypes.array,
  autoPlay: propTypes.bool,
  navigation: propTypes.object,
  slidesPerView: propTypes.oneOfType([propTypes.string, propTypes.number]),
  swipeable: propTypes.bool,
  pagination: propTypes.bool,
  spaceBetween: propTypes.number,
  adaptiv: propTypes.string,
  reset: propTypes.bool,
};

export default function Slider({
  children,
  autoPlay = false,
  navigation,
  slidesPerView = 1,
  swipeable = true,
  pagination = false,
  spaceBetween = 0,
  adaptiv = '',
  reset = false,
  ...props
}) {
  const [slides, setSlides] = useState([]);
  const [offset, setOffset] = useState(0);
  const [slideWidth, setSlideWidth] = useState(100);
  const [active, setActive] = useState(1);
  const [maxActive, setMaxActive] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const autoplayInterval = useRef(null);

  const windowRef = useRef(null);

  const disableNavigation = useCallback(
    currentActive => {
      if (navigation) {
        if (navigation.prev) {
          navigation.prev.current.disabled = false;
        }
        if (navigation.next) {
          navigation.next.current.disabled = false;
        }

        if (currentActive == 1 && navigation.prev) {
          navigation.prev.current.disabled = true;
        } else if (currentActive == maxActive && navigation.next) {
          navigation.next.current.disabled = true;
        }
      }
    },
    [navigation, maxActive],
  );

  const swipeRight = useCallback(
    reset => {
      setOffset(currentOffset => {
        const newOffset = currentOffset - slideWidth - spaceBetween;
        if (currentOffset <= maxOffset && reset) {
          setActive(1);
          disableNavigation(1);
          return 0;
        } else if (currentOffset > maxOffset) {
          setActive(active + 1);
        }

        disableNavigation(active + 1);
        return Math.max(newOffset, maxOffset);
      });
    },
    [maxOffset, slideWidth, active, disableNavigation, spaceBetween],
  );

  const swipeLeft = useCallback(() => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + slideWidth + spaceBetween;

      if (active != 1) {
        setActive(active - 1);
      }

      disableNavigation(active - 1);
      return Math.min(newOffset, 0);
    });
  }, [slideWidth, active, disableNavigation, spaceBetween]);

  const handleLeftArrowClickAndSwipe = useCallback(() => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }
    swipeLeft();
  }, [swipeLeft]);

  const handleRightArrowClickAndSwipe = useCallback(() => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }
    swipeRight();
  }, [swipeRight]);

  useEffect(() => {
    const style = {
      minWidth: `100%`,
      maxWidth: `100%`,
      height: 'auto',
    };

    setMaxOffset(
      Number(slidesPerView) >= 2
        ? -(
            slideWidth * (slides.length - 1) -
            slideWidth * 2 +
            (slides.length - 1) * spaceBetween -
            spaceBetween * 2
          )
        : -(
            slideWidth * (slides.length - 1) +
            (slides.length - 1) * spaceBetween
          ),
    );

    setMaxActive(
      Number(slidesPerView) >= 2 ? slides.length - 2 : slides.length,
    );

    disableNavigation(1);

    if (slidesPerView === 'auto') {
      style.minWidth = 'auto';
      setSlideWidth(null);
    } else {
      const width = 100 / slidesPerView;
      setSlideWidth(width);
      style.minWidth = width + '%';
    }

    setSlides(
      Children.map(children, child => {
        return cloneElement(child, {
          style: style,
        });
      }),
    );
  }, [
    children,
    slidesPerView,
    slideWidth,
    slides.length,
    disableNavigation,
    spaceBetween,
  ]);

  useEffect(() => {
    if (navigation) {
      navigation.prev.current.onclick = handleLeftArrowClickAndSwipe;

      navigation.next.current.onclick = handleRightArrowClickAndSwipe;
    }
  }, [navigation, handleLeftArrowClickAndSwipe, handleRightArrowClickAndSwipe]);

  useEffect(() => {
    if (windowRef.current && swipeable) {
      const sliderWindow = windowRef.current;
      let x;

      const setXMob = e => {
        x = e.changedTouches[0].clientX;
      };

      const checkDirectionMob = e => {
        if (e.changedTouches[0].clientX - x < -50) {
          handleRightArrowClickAndSwipe();
        } else if (e.changedTouches[0].clientX - x > 50) {
          handleLeftArrowClickAndSwipe();
        }
      };

      const setXPC = e => {
        x = e.clientX;
      };

      const checkDirectionPC = e => {
        if (e.clientX - x < -50) {
          handleRightArrowClickAndSwipe();
        } else if (e.clientX - x > 50) {
          handleLeftArrowClickAndSwipe();
        }
      };

      sliderWindow.addEventListener('touchstart', setXMob, { passive: true });
      sliderWindow.addEventListener('touchend', checkDirectionMob);
      sliderWindow.addEventListener('mousedown', setXPC);
      sliderWindow.addEventListener('mouseup', checkDirectionPC);

      return () => {
        sliderWindow.removeEventListener('touchstart', setXMob, {
          passive: true,
        });
        sliderWindow.removeEventListener('touchend', checkDirectionMob);
        sliderWindow.removeEventListener('mousedown', setXPC);
        sliderWindow.removeEventListener('mouseup', checkDirectionPC);
      };
    }

    return;
  }, [handleLeftArrowClickAndSwipe, handleRightArrowClickAndSwipe, swipeable]);

  useEffect(() => {
    if (slides.length && autoPlay) {
      autoplayInterval.current = setInterval(() => {
        swipeRight(true);
      }, 3000);

      return () => clearInterval(autoplayInterval.current);
    } else if (reset) {
      setOffset(0);
      setActive(1);
    }
  }, [swipeRight, autoPlay, slides, reset]);

  return (
    <div className="slider w-full h-auto flex items-center" {...props}>
      {/* {active}/{maxActive} */}
      <div
        className="slider-window w-full h-full overflow-hidden"
        ref={windowRef}
      >
        <div
          className={[
            'slider-wrapper  h-full flex transition-transform duration-[600ms] ease select-none cursor-grab',
            adaptiv,
          ].join(' ')}
          style={{
            transform: `translateX(${offset}%)`,
            columnGap: `${spaceBetween}%`,
          }}
        >
          {slides}
        </div>

        {pagination && (
          <div className="slider-pagination w-full flex justify-center gap-x-2 mt-6">
            {Array.from({ length: maxActive }).map((i, index) => (
              <div
                key={index}
                className={[
                  'slider-pagination-dot w-4 h-4 rounded-full bg-[#F6F7FB]',
                  active == index + 1 ? '!bg-mainBlue' : '',
                ].join(' ')}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
