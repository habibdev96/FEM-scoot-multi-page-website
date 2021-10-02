import SubHero from '../components/Shared/SubHero';
import bg from '../assets/images/careers-locations-hero-desktop.jpg';
import MapSection from '../components/Location/MapSection';
import LocationCta from '../components/Location/LocationCta';

const Location = () => {
  return (
    <>
      <SubHero title='Locations' bg={bg} />
      <main>
        <MapSection />
        <LocationCta />
      </main>
    </>
  );
};

export default Location;
