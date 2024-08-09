import {
  useEffect,
  useState,
  Children,
  cloneElement,
  useCallback,
  useRef,
} from 'react';
import './Slider.css';
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
  ...props
}) {
  const [slides, setSlides] = useState([]);
  const [offset, setOffset] = useState(0);
  const animationInterval = useRef(null);
  const animationTimeout = useRef(null);
  const [slideWidth, setSlideWidth] = useState(100);
  const [active, setActive] = useState(1);
  const [maxActive, setMaxActive] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);

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

        if (currentActive == 0 && navigation.prev) {
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
        const newOffset = currentOffset - slideWidth;
        if (currentOffset <= maxOffset && reset) {
          setActive(1);
          disableNavigation(0);
          return 0;
        } else if (currentOffset > maxOffset) {
          setActive(active + 1);
        }

        disableNavigation(active + 1);
        return Math.max(newOffset, maxOffset);
      });
    },
    [maxOffset, slideWidth, active, disableNavigation],
  );

  const swipeLeft = useCallback(() => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + slideWidth;

      if (0 >= newOffset) {
        setActive(active - 1);
      }

      disableNavigation(active - 1);
      return Math.min(newOffset, 0);
    });
  }, [slideWidth, active, disableNavigation]);

  const startAutoSwipe = useCallback(() => {
    animationInterval.current = setInterval(() => {
      swipeRight(true);
    }, 3000);
  }, [swipeRight]);

  function stopAutoSwipe() {
    clearInterval(animationInterval.current);
  }

  const resetAnimation = useCallback(() => {
    if (animationTimeout.current) {
      clearTimeout(animationTimeout.current);
    }

    stopAutoSwipe();

    animationTimeout.current = setTimeout(() => {
      startAutoSwipe();
    }, 3000);
  }, [startAutoSwipe]);

  const handleLeftArrowClickAndSwipe = useCallback(() => {
    resetAnimation();
    swipeLeft();
  }, [swipeLeft, resetAnimation]);

  const handleRightArrowClickAndSwipe = useCallback(() => {
    resetAnimation();
    swipeRight();
  }, [swipeRight, resetAnimation]);

  useEffect(() => {
    const style = {
      minWidth: `100%`,
      maxWidth: `100%`,
      height: 'auto',
    };

    setMaxOffset(
      Number(slidesPerView) > 1
        ? -(slideWidth * (slides.length - 1) - slideWidth * 2)
        : -(slideWidth * (slides.length - 1)),
    );

    setMaxActive(Number(slidesPerView) > 1 ? slides.length - 2 : slides.length);

    disableNavigation(0);

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
  }, [children, slidesPerView, slideWidth, slides.length, disableNavigation]);

  useEffect(() => {
    if (navigation) {
      navigation.prev.current.onclick = handleLeftArrowClickAndSwipe;

      navigation.next.current.onclick = handleRightArrowClickAndSwipe;
    }
  }, [navigation, handleLeftArrowClickAndSwipe, handleRightArrowClickAndSwipe]);

  useEffect(() => {
    if (slides.length && autoPlay) {
      startAutoSwipe();
    }

    return () => stopAutoSwipe();
  }, [autoPlay, slides.length, startAutoSwipe]);

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

  return (
    <div className="slider" {...props}>
      <div className="slider-window" ref={windowRef}>
        <div
          className={[
            'slider-wrapper',
            `gap-x-[${spaceBetween}px]`,
            adaptiv,
          ].join(' ')}
          style={{
            transform: `translateX(${offset}%)`,
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
