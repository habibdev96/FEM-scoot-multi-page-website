import HomeHero from '../components/Home/HomeHero';
import HomeFeatureCards from '../components/Home/HomeFeatureCards';
import HomeFeatureSectionOne from '../components/Home/HomeFeatureSectionOne';
import HomeFeatureSectionTwo from '../components/Home/HomeFeatureSectionTwo';
import HomeFeatureSectionThree from '../components/Home/HomeFeatureSectionThree';

const Home = () => {
  return (
    <>
      <HomeHero />
      <main>
        <HomeFeatureCards />
        <HomeFeatureSectionOne />
        <HomeFeatureSectionTwo />
        <HomeFeatureSectionThree />
      </main>
    </>
  );
};

export default Home;
