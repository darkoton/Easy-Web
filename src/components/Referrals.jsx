import people from '@/assets/img/referrals/people.webp';
import emoji from '@/assets/img/referrals/emoji.webp';

export default function ReferralsSection() {
  return (
    <section className="referrals mt-20 lg:mt-32">
      <div className="referrals__container _container">
        <div className="referrals__body flex items-center justify-center gap-x-16 gap-y-8 flex-col md:flex-row">
          <div className="referrals__left flex justify-center relative w-full md:w-1/2 before:absolute before:blur-[140px] before:-left-1/2 before:translate-x-1/2 before:bottom-0 before:content-[''] before:w-72 before:h-72 before:rounded-full before:bg-[#99B8FF] before:-z-10">
            <img
              src={people}
              alt="young people standing and talking."
              className="referrals__people w-full max-w-[430px] sm:max-w-6.5/12 md:max-w-[400px] lg:max-w-[460px]"
            />
          </div>
          <div className="referrals__right flex flex-col text-center items-center w-full md:text-left md:items-start md:w-1/2">
            <h2 className="referrals__title title-section mb-6 md:mb-8">
              Реферальная <br /> программа
            </h2>
            <p className="referrals__descripion max-w-64 text-sm mb-8 md:max-w-96 md:text-xl md:mb-9">
              Рекомендуйте Easy<span className="text-mainBlue">Web</span> своим
              друзьям, подписчикам и получайте
            </p>

            <button className="referrals__button group flex justify-center font-bold relative py-2 px-5 pl-20 items-center bg-black rounded-3xl text-white transition-transform duration-300 active:scale-[0.98] mb-8 md:mb-10">
              <img
                src={emoji}
                alt="emoji"
                className="referrals__emoji absolute -left-1 w-full max-w-[72px] transition-transform duration-700 group-hover:rotate-[30deg]"
              />
              <span>20% от всех их покупок</span>
            </button>

            <p className="referrals__note text-slate-500 text-sm md:text-base">
              * Выводите средства на свою <br /> банковскую карту / крипто
              кошельки
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
