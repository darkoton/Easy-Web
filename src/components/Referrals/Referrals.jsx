import '@/components/Referrals/Referrals.css';
import people from '@/assets/img/referrals/people.png';
import emoji from '@/assets/img/referrals/emoji.png';

export default function ReferralsSection() {
  return (
    <section className="referrals">
      <div className="referrals__container _container">
        <div className="referrals__body">
          <div className="referrals__left">
            <img
              src={people}
              alt="young people standing and talking."
              className="referrals__people"
            />
          </div>
          <div className="referrals__right">
            <h2 className="referrals__title">
              Реферальная <br /> программа
            </h2>
            <p className="referrals__descripion">
              Рекомендуйте Easy<span className="blue-text">Web</span> своим
              друзьям, подписчикам и получайте
            </p>

            <button className="referrals__button group">
              <img src={emoji} alt="emoji" className="referrals__emoji" />
              <span>20% от всех их покупок</span>
            </button>

            <p className="referrals__note">
              * Выводите средства на свою <br /> банковскую карту / крипто
              кошельки
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
