import HomeHero from '../components/Home/HomeHero';
import HomeFeatureCards from '../components/Home/HomeFeatureCards';
import FeatureSection from '../components/Shared/FeatureSection';
import { useGlobalContext } from '../context';

const Home = () => {
  const { homeFeatureSections } = useGlobalContext();

  return (
    <>
      <HomeHero />
      <main>
        <HomeFeatureCards />
        {homeFeatureSections.map((section) => (
          <FeatureSection key={section.id} {...section} />
        ))}
      </main>
    </>
  );
};

export default Home;
