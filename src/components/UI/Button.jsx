import propTypes from 'prop-types';

Button.propTypes = {
  className: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.element,
  ]),
};

export default function Button({ className, children }) {
  return (
    <button
      className={[
        'btn relative font-bold text-base transition-all duration-200 ease-in-out bg-mainBlue text-white rounded-[1rem] py-2 px-5 cursor-pointer overflow-hidden hover:scale-105 active:translate-y-[2px] sm:py-3 sm:px-6',
        className,
      ].join(' ')}
    >
      {children}
      <span className="flare absolute top-0 h-full w-[40px] -skew-x-[45deg] -left-[150%] bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.4)] animate-flare "></span>
    </button>
  );
}
