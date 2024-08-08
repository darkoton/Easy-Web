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
  spaceBetween: propTypes.number,
  slideWidth: propTypes.number,
  children: propTypes.array,
  units: propTypes.string,
  auto: propTypes.bool,
  navigation: propTypes.object,
};

const SLIDE_WIDTH_DEFAULT = 100;
const GAP = 24;

export default function Slider({
  units = '%',
  slideWidth = SLIDE_WIDTH_DEFAULT,
  children,
  auto = false,
  navigation,
  ...props
}) {
  const [slides, setSlides] = useState([]);
  const [offset, setOffset] = useState(0);
  const animationInterval = useRef(null);
  const animationTimeout = useRef(null);

  const swipeRight = useCallback(
    reset => {
      setOffset(currentOffset => {
        const newOffset = currentOffset - slideWidth - GAP;
        const maxOffset = -(slideWidth * (slides.length - 1) - slideWidth * 2);

        if (currentOffset <= maxOffset && reset) {
          return 0;
        }

        return Math.max(newOffset, maxOffset);
      });
    },
    [slideWidth, slides],
  );

  const swipeLeft = useCallback(() => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + slideWidth + GAP;
      return Math.min(newOffset, 0);
    });
  }, [slideWidth]);

  const startAutoSwipe = useCallback(() => {
    animationInterval.current = setInterval(() => {
      swipeRight(true);
    }, 1000);
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

  const handleLeftArrowClick = useCallback(() => {
    resetAnimation();
    swipeLeft();
  }, [swipeLeft, resetAnimation]);

  const handleRightArrowClick = useCallback(() => {
    resetAnimation();
    swipeRight();
  }, [swipeRight, resetAnimation]);

  useEffect(() => {
    setSlides(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            minWidth: `${slideWidth}${units}`,
            maxWidth: `${slideWidth}${units}`,
          },
        });
      }),
    );
  }, [children, slideWidth, units]);

  useEffect(() => {
    if (navigation) {
      navigation.prev.current.onclick = handleLeftArrowClick;

      navigation.next.current.onclick = handleRightArrowClick;
    }
  }, [navigation, handleLeftArrowClick, handleRightArrowClick]);

  useEffect(() => {
    if (slides.length && auto) {
      startAutoSwipe();
    } else {
      setOffset(0);
    }

    return () => stopAutoSwipe();
  }, [auto, swipeRight, slides, startAutoSwipe]);

  return (
    <div className="slider" {...props}>
      <div className="slider-window">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${offset}${units})`,
          }}
        >
          {slides}
        </div>
      </div>
    </div>
  );
}
