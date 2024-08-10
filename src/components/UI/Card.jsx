import propTypes from 'prop-types';

Card.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  img: propTypes.string,
  wrap: propTypes.bool,
  className: propTypes.string,
  textClassName: propTypes.string,
};

export default function Card({
  title = '',
  description = '',
  img = null,
  wrap = true,
  className = '',
  textClassName = '',
  ...props
}) {
  return (
    <div
      className={[
        'card flex flex-col items-start bg-cardGray w-full p-6 md:p-8 rounded-[24px] md:rounded-[32px]',
        className,
      ].join(' ')}
      {...props}
    >
      <div
        className={[
          'card-top flex gap-y-4 items-center gap-x-4 mb-3 md:items-start md:mb-4',
          wrap ? 'flex-row md:flex-col' : 'flex-col',
        ].join(' ')}
      >
        <img src={img} alt="logo" className="card-img max-w-full" />
        {title && (
          <h3 className="card-title font-bold text-lg leading-5 md:text-2xl md:leading-6">
            {title}
          </h3>
        )}
      </div>
      <p
        className={[
          'card-description text-sm leading-4 md:text-base',
          textClassName,
        ].join(' ')}
      >
        {description}
      </p>
    </div>
  );
}
