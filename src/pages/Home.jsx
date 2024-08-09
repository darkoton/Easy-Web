import MainSection from '@/components/Main/Main';
import SkillsSection from '@/components/Skills/Skills';
import ReferralsSection from '@/components/Referrals/Referrals';
import AdvantagesSection from '@/components/Advantages/Advantages';
// import TariffSection from '@/components/Tariff/Tariff';
import BenefitSection from '@/components/Benefit/Benefit';
import QuestionsSection from '@/components/Questions/Questions';

export default function HomePage() {
  return (
    <div className="page">
      <MainSection />
      <SkillsSection />
      <ReferralsSection />
      <AdvantagesSection />
      {/* <TariffSection /> */}
      <BenefitSection />
      <QuestionsSection />
    </div>
  );
}
