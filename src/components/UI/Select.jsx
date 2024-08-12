import propTypes from 'prop-types';
import arrow from '@/assets/img/header/arrow.svg';
import { useState } from 'react';

Select.propTypes = {
  value: propTypes.string,
  options: propTypes.array,
  onChange: propTypes.func,
};

export default function Select({ value, options, onChange }) {
  const [active, setActive] = useState(false);
  return (
    <div className="select relative">
      <span
        onClick={() => setActive(!active)}
        className="select-value flex items-center gap-x-2 font-medium text-sm cursor-pointer px-2 py-1"
      >
        {options.filter(o => o.value == value)[0].key}
        <img
          src={arrow}
          alt=""
          className={[
            'select-arrow transition-transform',
            active && '-scale-y-100',
          ].join(' ')}
        />
      </span>

      <ul
        className={[
          'select-list transition-opacity flex flex-col absolute overflow-hidden rounded-md top-full shadow shadow-[rgba(0,0,0,0.3)]',
          active ? 'opacity-1 z-10' : 'opacity-0 -z-10',
        ].join(' ')}
      >
        {options.map(option => (
          <li
            key={option.key}
            className="select-list-item px-3 py-1 cursor-pointer w-full transition-colors duration-300 hover:bg-mainBlue hover:text-white"
            onClick={() => (onChange(option.value), setActive(false))}
          >
            {option.key}
          </li>
        ))}
      </ul>
    </div>
  );
}
