import HomeHero from '../components/Home/HomeHero';
import HomeFeatureCards from '../components/Home/HomeFeatureCards';
import HomeFeatureSectionOne from '../components/Home/HomeFeatureSectionOne';

const Home = () => {
  return (
    <>
      <HomeHero />
      <main>
        <HomeFeatureCards />
        <HomeFeatureSectionOne />
      </main>
    </>
  );
};

export default Home;
