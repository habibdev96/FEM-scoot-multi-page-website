import SubHero from '../components/Shared/SubHero';
import bg from '../assets/images/careers-locations-hero-desktop.jpg';
import FeatureSection from '../components/Shared/FeatureSection';
import CompanyValuesCards from '../components/Shared/CompanyValuesCards';
import { useGlobalContext } from '../context';

const Careers = () => {
  const { careersFeatureSection } = useGlobalContext();

  return (
    <>
      <SubHero title='Careers' bg={bg} />
      <main>
        {careersFeatureSection.map((section) => (
          <FeatureSection key={section.id} {...section} />
        ))}
        <CompanyValuesCards title='Why join us?' />
      </main>
    </>
  );
};

export default Careers;
