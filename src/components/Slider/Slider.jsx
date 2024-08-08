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
};

export default function Slider({
  children,
  autoPlay = false,
  navigation,
  slidesPerView = 1,
  swipeable = true,
  ...props
}) {
  const [slides, setSlides] = useState([]);
  const [offset, setOffset] = useState(0);
  const animationInterval = useRef(null);
  const animationTimeout = useRef(null);
  const [slideWidth, setSlideWidth] = useState(100);
  const [active, setActive] = useState(0);
  const windowRef = useRef(null);

  const swipeRight = useCallback(
    reset => {
      setOffset(currentOffset => {
        const newOffset = currentOffset - slideWidth;

        const maxOffset = Number(slidesPerView)
          ? -(slideWidth * (slides.length - 1) - slideWidth * 2)
          : -(slideWidth * (slides.length - 1));

        if (currentOffset <= maxOffset && reset) {
          setActive(0);
          return 0;
        } else if (currentOffset > maxOffset) {
          setActive(active + 1);
        }

        return Math.max(newOffset, maxOffset);
      });
    },
    [slides, slideWidth, slidesPerView, active],
  );

  const swipeLeft = useCallback(() => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + slideWidth;

      if (0 >= newOffset) {
        setActive(active - 1);
      }

      return Math.min(newOffset, 0);
    });
  }, [slideWidth, active]);

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
  }, [children, slidesPerView]);

  useEffect(() => {
    if (navigation) {
      navigation.prev.current.onclick = handleLeftArrowClickAndSwipe;

      navigation.next.current.onclick = handleRightArrowClickAndSwipe;
    }
  }, [navigation, handleLeftArrowClickAndSwipe, handleRightArrowClickAndSwipe]);

  useEffect(() => {
    if (slides.length && autoPlay) {
      startAutoSwipe();
    } else {
      setOffset(0);
    }

    return () => stopAutoSwipe();
  }, [autoPlay, swipeRight, slides, startAutoSwipe]);

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

      sliderWindow.addEventListener('touchstart', setXMob);
      sliderWindow.addEventListener('touchend', checkDirectionMob);
      sliderWindow.addEventListener('mousedown', setXPC);
      sliderWindow.addEventListener('mouseup', checkDirectionPC);

      return () => {
        sliderWindow.removeEventListener('touchstart', setXMob);
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
          className="slider-wrapper"
          style={{
            transform: `translateX(${offset}%)`,
          }}
        >
          {slides}
        </div>
      </div>
    </div>
  );
}
