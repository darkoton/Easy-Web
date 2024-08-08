import propTypes from 'prop-types';

Accordion.propTypes = {
  active: propTypes.bool,
  onClick: propTypes.func,
  title: propTypes.string,
  text: propTypes.string,
};

export default function Accordion({ active, onClick, title, text }) {
  return (
    <div className="rounded-[24px] md:rounded-[32px] bg-cardGray">
      <h3>
        <button
          className="group flex gap-x-3 w-full justify-between items-center px-5 py-3 md:px-8 md:py-4 text-left text-lg md:text-2xl font-bold"
          onClick={onClick}
        >
          {title}
          <span
            className={[
              'transition-transform duration-200 ease-in-out',
              active && 'rotate-[-180deg]',
            ].join(' ')}
          >
            <svg
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2755 8.61315L18.3955 2.49315C18.6438 2.24333 18.7832 1.9054 18.7832 1.55315C18.7832 1.2009 18.6438 0.862964 18.3955 0.613148C18.2715 0.488177 18.1241 0.388984 17.9616 0.321293C17.7991 0.253601 17.6248 0.21875 17.4488 0.21875C17.2728 0.21875 17.0985 0.253601 16.936 0.321293C16.7736 0.388984 16.6261 0.488177 16.5021 0.613148L10.3955 6.74648C10.2715 6.87145 10.1241 6.97065 9.96158 7.03834C9.7991 7.10603 9.62483 7.14088 9.44881 7.14088C9.2728 7.14088 9.09852 7.10603 8.93604 7.03834C8.77357 6.97065 8.6261 6.87145 8.50215 6.74648L2.39548 0.613148C2.14618 0.362076 1.80735 0.220323 1.45353 0.219073C1.09971 0.217823 0.759886 0.357179 0.508814 0.606482C0.257742 0.855786 0.115988 1.19462 0.114738 1.54843C0.113487 1.90225 0.252846 2.24208 0.50215 2.49315L6.62215 8.61315C7.37215 9.36222 8.38881 9.78296 9.44881 9.78296C10.5088 9.78296 11.5255 9.36222 12.2755 8.61315Z"
                fill="#004EFF"
              />
            </svg>
          </span>
        </button>
      </h3>
      <div className={[active ? 'visible' : 'hidden'].join(' ')}>
        <p className="py-3 md:px-8 py-0">{text}</p>
      </div>
    </div>
  );
}
