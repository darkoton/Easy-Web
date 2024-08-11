import laptop from '@/assets/img/main/laptop.webp';
import laptopMob from '@/assets/img/main/laptop-mob.webp';
import head from '@/assets/img/main/head.webp';
import Button from '@/components/UI/Button';

export default function MainSection() {
  return (
    <main className="main mt-10">
      <div className="main__container _container">
        <div className="main__body flex justify-center gap-x-2 gap-y-9 items-center flex-col-reverse md:flex-row">
          <div className="main__left relative flex justify-center w-full md:w-6.5/12 before:absolute before:blur-[130px] before:-left-1/2 before:translate-x-1/2 before:bottom-0 before:content-[''] before:w-72 before:h-72 before:rounded-full before:bg-[#99B8FF] before:-z-10">
            <img
              src={laptop}
              alt=""
              className="main__laptop w-full hidden sm:block sm:w-8/12 md:w-full"
            />
            <img
              src={laptopMob}
              alt=""
              className="main__laptop w-full block sm:hidden"
            />
          </div>
          <div className="main__right flex-auto flex flex-col justify-center items-start relative w-full md:w-5/12">
            <h1 className="main__title mb-4 font-bold max-sm:max-w-96 text-[32px] leading-[38px] lg:text-4xl lg:leading-[43px] xl:text-5xl xl:leading-[58px]">
              Конструктор лендингов для товарного бизнеса
            </h1>
            <p className="main__description mb-6 text-base leading-[19px] max-w-60 sm:leading-[24px] sm:mb-8 sm:text-xl sm:max-w-max">
              Зарабатывайте больше, создавайте за минуты
            </p>

            <Button className="main__button !px-6">Начать бесплатно</Button>

            <div className="main__head-body absolute -z-10 flex justify-end -right-5 lg:right-12 -bottom-4 md:-bottom-20 after:blur-[70px] after:border-[1px] after:bg-[#B3CAFF] after:absolute  after:-right-16 after:bottom-0 after:content-[''] after:w-48 after:h-48 after:rounded-full after:-z-10">
              <img
                src={head}
                alt=""
                className="main__head w-full max-w-[150px] md:max-w-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
