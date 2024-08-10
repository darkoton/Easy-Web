import logo from '@/assets/img/footer/logo.webp';
import telegram from '@/assets/img/footer/telegram.webp';
import email from '@/assets/img/footer/email.webp';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer__container _container">
        <div className="footer__body pt-8 pb-8 lg:pb-[26px] gap-y-8 flex flex-col">
          <div className="footer__top flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-y-8">
            <div className="footer__logo flex items-center gap-x-3">
              <img src={logo} alt="" className="footer__logo-img max-w-full" />
              <div className="footer__beta font-bold rounded-3xl bg-mainBlue px-2 py-1 text-xs text-white md:bg-white md:px-[10px] md:text-dark">
                Beta
              </div>
            </div>

            <div className="footer__contacts flex flex-wrap items-start md:items-center gap-3">
              <a
                href="#"
                className="footer__contact flex items-center gap-x-2 text-sm p-1 pl-2 rounded-[24px] bg-white md:text-base"
              >
                <img
                  src={telegram}
                  alt="telegram"
                  className="footer__contact-img max-w-full"
                />
                <span className="footer__contact-title text-dark">Чат</span>
                <span className="footer__contact-value bg-dark py-[6px] px-3 rounded-[24px] leading-5">
                  @lsapp
                </span>
              </a>

              <a
                href="#"
                className="footer__contact flex items-center gap-x-2 text-sm p-1 pl-2 rounded-[24px] bg-white md:text-base"
              >
                <img
                  src={telegram}
                  alt="telegram"
                  className="footer__contact-img max-w-full"
                />
                <span className="footer__contact-title text-dark">Канал</span>
                <span className="footer__contact-value bg-dark py-[6px] px-3 rounded-[24px] leading-5">
                  @lscreew
                </span>
              </a>

              <a
                href="#"
                className="footer__contact flex items-center gap-x-2 text-sm p-1 pl-2 rounded-[24px] bg-white md:text-base"
              >
                <img
                  src={email}
                  alt="email"
                  className="footer__contact-img max-w-full"
                />
                <span className="footer__contact-title text-dark">Почта</span>
                <span className="footer__contact-value bg-dark py-[6px] px-3 rounded-[24px] leading-5">
                  support@ls.app
                </span>
              </a>
            </div>
          </div>

          <div className="footer__bottom text-blueGray text-sm flex justify-between flex-col-reverse lg:flex-row gap-y-8">
            <div className="footer__rights">© EasyWeb 2024</div>
            <div className="footer__links flex gap-x-[72px] gap-y-4 flex-wrap">
              <a
                href="#"
                className="footer__link underline transition-colors hover:text-mainBlue"
              >
                Реферальная програма
              </a>

              <a
                href="#"
                className="footer__link underline transition-colors hover:text-mainBlue"
              >
                Политика конфиденциальности
              </a>

              <a
                href="#"
                className="footer__link underline transition-colors hover:text-mainBlue"
              >
                Лицензионное соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
