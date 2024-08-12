import propTypes from 'prop-types';

const buttonPropTypes = {
  className: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.element,
  ]),
};

Button.propTypes = buttonPropTypes;
ButtonOutlined.propTypes = buttonPropTypes;

export function Button({ className, children }) {
  return (
    <button
      className={[
        'btn relative font-bold text-base transition-all duration-200 ease-in-out bg-mainBlue text-white rounded-[1rem] py-3 px-5 cursor-pointer overflow-hidden hover:scale-105 active:translate-y-[2px] sm:px-6',
        className,
      ].join(' ')}
    >
      {children}
      <span className="flare absolute top-0 h-full w-[40px] -skew-x-[45deg] -left-[150%] bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.4)] animate-flare will-change-transform"></span>
    </button>
  );
}

export function ButtonOutlined({ className, children }) {
  return (
    <button
      className={[
        'btn relative font-bold text-base transition-all duration-200 ease-in-out text-dark rounded-[1rem] border-[1px] border-mainBlue py-[10px] px-5 cursor-pointer overflow-hidden hover:scale-105 active:translate-y-[2px] sm:px-6',
        className,
      ].join(' ')}
    >
      {children}
      <span className="flare absolute top-0 h-full w-[40px] -skew-x-[45deg] -left-[150%] bg-gradient-to-r from-[rgba(0,78,255,0.1)] to-[rgba(0,78,255,0.4)] animate-flare will-change-transform"></span>
    </button>
  );
}
