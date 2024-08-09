import laptop from '@/assets/img/main/laptop.png';
import head from '@/assets/img/main/head.png';

export default function MainSection() {
  return (
    <main className="main mt-10">
      <div className="main__container _container">
        <div className="main__body flex justify-center gap-x-3 gap-y-9 items-center flex-col-reverse md:flex-row">
          <div className="main__left relative flex justify-center w-full md:w-6.5/12 before:absolute before:blur-[324px] before:left-0 before:bottom-0 before:content-[''] before:w-72 before:h-72 before:rounded-full before:bg-blue-600 before:-z-10">
            <img
              src={laptop}
              alt=""
              className="main__laptop w-full sm:w-8/12 md:w-full"
            />
          </div>
          <div className="main__right flex-auto flex flex-col justify-center items-start relative w-full md:w-5/12">
            <h1 className="main__title mb-4 font-bold max-sm:max-w-96 text-3xl lg:text-4xl xl:text-5xl">
              Конструктор лендингов для товарного бизнеса
            </h1>
            <p className="main__description mb-6 text-base max-w-60 sm:mb-8 sm:text-xl sm:max-w-max">
              Зарабатывайте больше, создавайте за минуты
            </p>

            <button className="main__button font-bold text-base transition-all bg-mainBlue text-white rounded-2xl border-2 border-mainBlue py-2 px-5 sm:py-3 sm:px-6 cursor-pointer hover:bg-transparent hover:text-black hover:shadow-inner hover:shadow-blue-300 active:translate-y-0.5">
              Начать бесплатно
            </button>

            <div className="main__head-body absolute z-10 flex justify-end right-0 -bottom-4 lg:-bottom-20 after:absolute after:blur-[264px] after:-right-40 after:bottom-0 after:content-[''] after:w-48 after:h-48 after:rounded-full after:bg-mainBlue after:-z-10">
              <img src={head} alt="" className="main__head w-3/4 lg:w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
