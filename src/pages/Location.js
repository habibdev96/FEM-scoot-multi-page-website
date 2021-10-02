import SubHero from '../components/Shared/SubHero';
import bg from '../assets/images/careers-locations-hero-desktop.jpg';
import MapSection from '../components/Location/MapSection';

const Location = () => {
  return (
    <>
      <SubHero title='Locations' bg={bg} />
      <main>
        <MapSection />
      </main>
    </>
  );
};

export default Location;
