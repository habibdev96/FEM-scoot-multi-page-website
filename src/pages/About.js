import SubHero from '../components/Shared/SubHero';
import bg from '../assets/images/about-hero-desktop.jpg';
import FeatureSection from '../components/Shared/FeatureSection';
import { useGlobalContext } from '../context';

const About = () => {
  const { aboutFeatureSections, scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <SubHero title='About' bg={bg} />
      <main>
        {aboutFeatureSections.map((section) => (
          <FeatureSection key={section.id} {...section} />
        ))}
      </main>
    </>
  );
};

export default About;
