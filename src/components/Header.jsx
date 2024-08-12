import logo from '@/assets/img/header/logo.webp';
import { Button, ButtonOutlined } from '@/components/UI/Button';
import Select from '@/components/UI/Select';
import propTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const options = [
  {
    value: 'ru',
    key: 'Ру',
  },
  {
    value: 'ua',
    key: 'Ук',
  },
  {
    value: 'en',
    key: 'En',
  },
];

export default function Header() {
  const [selectValue, setSelectValue] = useState(options[0].value);
  const [activeBurger, setActiveBurger] = useState(false);

  function selectChange(value) {
    setSelectValue(value);
  }

  function openBurger() {
    document.body.classList.toggle('overflow-hidden');
    setActiveBurger(!activeBurger);
  }

  function scrollSection(className) {
    openBurger();
    document
      .querySelector('.' + className)
      .scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <>
      <header className="header fixed w-full z-30 bg-white shadow-[rgba(0,0,0,0.2)] shadow-sm">
        <div className="header__container _container">
          <div className="header__body relative bg-white z-30 flex items-center justify-between gap-x-8 py-4 min-[950px]:py-6">
            <div className="header__left flex items-center gap-x-10">
              <Link to="/Easy-Web/">
                <div className="header__logo flex items-center gap-x-3">
                  <img
                    src={logo}
                    alt=""
                    className="header__logo-img w-full max-w-[125px] md:max-w-[142px]"
                  />
                  <span className="header__logo-beta py-1 px-2 lg:px-[10px] rounded-3xl bg-dark text-white text-xs md:text-sm">
                    Beta
                  </span>
                </div>
              </Link>
              <nav className="header__nav flex items-center gap-x-10 text-base max-[950px]:hidden">
                <NavLink onClick={() => scrollSection('advantages')}>
                  Преимущества
                </NavLink>
                <NavLink onClick={() => scrollSection('tariff')}>
                  Тарифы
                </NavLink>
                <NavLink onClick={() => scrollSection('questions')}>
                  FAQ
                </NavLink>
              </nav>
            </div>

            <div className="header__right flex items-center">
              <div className="header__actions flex items-center gap-x-6">
                <Select
                  value={selectValue}
                  options={options}
                  onChange={selectChange}
                  className="header__select"
                />
                <div className="header__buttons flex items-center gap-x-2 max-[950px]:hidden">
                  <NavLink to={'/test'}>hello</NavLink>
                  <Link to="/Easy-Web/login">
                    <ButtonOutlined className="header__button !px-4">
                      Вход
                    </ButtonOutlined>
                  </Link>
                  <Link to="/Easy-Web/signup">
                    <Button className="header__button !px-4">
                      Регистрация
                    </Button>
                  </Link>
                </div>

                <div
                  className="header__burger hidden flex-col gap-y-[5px] p-2  cursor-pointer max-[950px]:flex"
                  onClick={openBurger}
                >
                  <div className="relative w-[24px] h-[14px] ">
                    <span
                      className={[
                        'w-full h-[2px] bg-black rounded-[2px] transition-all absolute top-0',
                        activeBurger && 'top-1/2 -translate-y-1/2 -rotate-45',
                      ].join(' ')}
                    ></span>
                    <span
                      className={[
                        'w-full h-[2px] bg-black rounded-[2px] transition-all absolute top-1/2 -translate-y-1/2',
                        activeBurger && 'rotate-45',
                      ].join(' ')}
                    ></span>
                    <span
                      className={[
                        'w-full h-[2px] bg-mainBlue rounded-[2px] transition-all absolute bottom-0',
                        activeBurger && 'opacity-0',
                      ].join(' ')}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={[
              'header__burger-menu px-5 pb-6 pt-2 z-20 hidden max-[950px]:flex flex-col gap-y-2 absolute w-full left-0 transition-all duration-500 rounded-t-none rounded-3xl bg-white',
              activeBurger ? 'top-full' : '-top-[100vh]',
            ].join(' ')}
          >
            <nav className="header__nav flex flex-col items-start gap-x-10 gap-y-4 text-base">
              <NavLink onClick={() => scrollSection('advantages')}>
                Преимущества
              </NavLink>
              <NavLink onClick={() => scrollSection('tariff')}>Тарифы</NavLink>
              <NavLink onClick={() => scrollSection('questions')}>FAQ</NavLink>
              <NavLink onClick={() => scrollSection('footer')}>
                Контакты
              </NavLink>
            </nav>
            <div className="header__buttons flex items-center gap-x-2 max-[600px]:justify-center">
              <Link to="/Easy-Web/login">
                <ButtonOutlined className="header__button !px-4 max-[600px]:w-full !leading-[17px] !text-sm">
                  Вход
                </ButtonOutlined>
              </Link>
              <Link to="/Easy-Web/signup">
                <Button className="header__button !px-4 max-[600px]:w-full !leading-[17px] !text-sm">
                  Регистрация
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div
        className={[
          'header__burger-backward w-full h-full transition-opacity duration-500 fixed bg-dark bg-opacity-70',
          activeBurger ? 'z-10 opacity-1' : '-z-10 opacity-0',
        ].join(' ')}
        onClick={openBurger}
      ></div>
    </>
  );
}

NavLink.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.element,
  ]),
};

function NavLink({ children, ...props }) {
  return (
    <span
      className="header__nav-link cursor-pointer relative transition-colors duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:transition-[width] before:duration-500 before:w-0 before:h-[2px] before:bg-mainBlue hover:before:w-full hover:text-mainBlue"
      {...props}
    >
      {children}
    </span>
  );
}
