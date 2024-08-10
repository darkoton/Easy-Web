import MainSection from '@/components/Main';
import SkillsSection from '@/components/Skills';
import ReferralsSection from '@/components/Referrals';
import AdvantagesSection from '@/components/Advantages';
import TariffSection from '@/components/Tariff/Tariff.jsx';
import BenefitSection from '@/components/Benefit';
import QuestionsSection from '@/components/Questions';

export default function HomePage() {
  return (
    <>
      <MainSection />
      <SkillsSection />
      <ReferralsSection />
      <AdvantagesSection />
      <TariffSection />
      <BenefitSection />
      <QuestionsSection />
    </>
  );
}
