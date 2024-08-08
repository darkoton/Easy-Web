import MainSection from '@/components/Main/Main';
import SkillsSection from '../components/Skills/Skills';
import ReferralsSection from '@/components/Referrals/Referrals';

export default function Homeage() {
  return (
    <div className="page">
      <MainSection />
      <SkillsSection />
      <ReferralsSection />
    </div>
  );
}
