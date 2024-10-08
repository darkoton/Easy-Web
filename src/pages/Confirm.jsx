import laptop from '@/assets/img/auth/laptop.webp';
import { Button } from '@/components/UI/Button';
import Header from '@/components/Header';

export default function LoginPage() {
  return (
    <>
      <Header />
      <section className="login mt-[90px] min-[950px]:mt-[120px] pb-[66px] lg:pb-[120px] w-full relative">
        <div className="login__container _container">
          <div className="login__body flex flex-col">
            <div className="login__main flex items-center justify-center lg:justify-stretch gap-x-16">
              <div className="login__left hidden lg:block">
                <img
                  src={laptop}
                  alt="laptop"
                  className="login__laptop w-full max-w-[692px] object-cover"
                />
              </div>

              <div className="login__right flex justify-center w-full max-w-[360px] ">
                <form
                  action="#"
                  className="login__form w-full form flex flex-col items-center p-6 lg:p-8 bg-cardGray rounded-[32px] gap-y-3 lg:gap-y-4"
                >
                  <h2 className="form__title text-center font-bold text-2xl">
                    Подтвердите регистрацию
                  </h2>

                  <p className="form__text text-center mb-3 md:mb-4 text-sm md:text-base text-blueGray">
                    Мы отправили уведомление на почту / Telegram
                  </p>

                  <div className="form__field flex flex-col gap-y-3 w-full">
                    <label htmlFor="code" className="form__field-name text-sm">
                      Код подтверждения
                    </label>
                    <div className="form__field-input-body flex items-center gap-x-3 justify-between px-4 py-3 bg-white rounded-2xl">
                      <input
                        type="text"
                        id="code"
                        placeholder="Введите код"
                        className="form__field-input w-full text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="form__buttons flex flex-col items-center gap-y-3 w-full">
                    <Button className="form__button btn w-full text-sm rounded-2xl py-3">
                      Подтвердить
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="auth__support absolute right-3 cursor-pointer md:right-5 bottom-3 md:bottom-5 rounded-full p-[10px] md:p-[15px] bg-mainBlue border-2 border-mainBlue text-white transition-colors hover:bg-transparent hover:text-mainBlue">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2056_408)">
                  <path
                    d="M3.94075 9.75003C3.27125 9.75003 2.75125 9.14552 2.86934 8.48686C3.25825 6.31911 4.33834 4.30411 5.96225 2.78202C8.0585 0.815775 10.7961 -0.164642 13.6821 0.0227748C19.1215 0.373775 23.3703 5.10902 23.2902 10.7662C23.2468 13.819 20.7021 16.2511 17.6482 16.2511H14.4718C14.0818 16.6259 13.5553 16.8589 12.9725 16.8589C11.7754 16.8589 10.8058 15.8893 10.8058 14.6922C10.8058 13.4951 11.7754 12.5255 12.9725 12.5255C13.9562 12.5255 14.7773 13.1853 15.0417 14.0844H17.6482C19.5288 14.0844 21.1029 12.5862 21.1235 10.7066C21.1733 6.21511 17.8248 2.46352 13.5423 2.18619C11.2684 2.04536 9.09959 2.81236 7.44317 4.36477C6.13342 5.59219 5.2895 7.16411 4.99375 8.89094C4.90709 9.39577 4.45209 9.75219 3.94075 9.75219V9.75003ZM12.9996 18.4167C8.99667 18.4167 5.53325 20.8997 4.38167 24.5939C4.27875 24.9232 4.33834 25.2818 4.54309 25.5591C4.74784 25.8364 5.07175 26 5.41625 26H20.5829C20.9274 26 21.2513 25.8364 21.4561 25.5591C21.6608 25.2818 21.7204 24.9232 21.6175 24.5939C20.4659 20.8997 17.0025 18.4167 12.9996 18.4167ZM16.1781 11.9167H18.7283C18.8745 11.3999 18.9579 10.8561 18.9579 10.2917C18.9579 7.00052 16.2908 4.33336 12.9996 4.33336C9.70842 4.33336 7.04125 7.00052 7.04125 10.2917C7.04125 11.9069 7.68692 13.3694 8.73017 14.443C8.86125 12.2049 10.7008 10.4249 12.9725 10.4249C14.2628 10.4249 15.4003 11.011 16.1792 11.9167H16.1781Z"
                    fill="currentColor "
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2056_408">
                    <rect width="26" height="26" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
