import SubHero from '../components/Shared/SubHero';
import bg from '../assets/images/about-hero-desktop.jpg';
import FeatureSection from '../components/Shared/FeatureSection';
import CompanyValuesCards from '../components/Shared/CompanyValuesCards';
import { useGlobalContext } from '../context';

const About = () => {
  const { aboutFeatureSections } = useGlobalContext();

  return (
    <>
      <SubHero title='About' bg={bg} />
      <main>
        {aboutFeatureSections.map((section) => (
          <FeatureSection key={section.id} {...section} />
        ))}
        <CompanyValuesCards title='Our values' />
      </main>
    </>
  );
};

export default About;
