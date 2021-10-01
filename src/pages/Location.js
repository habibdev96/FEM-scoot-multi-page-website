import SubHero from '../components/Shared/SubHero';
import bg from '../assets/images/careers-locations-hero-desktop.jpg';
import { useGlobalContext } from '../context';

const Location = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <SubHero title='Locations' bg={bg} />
    </>
  );
};

export default Location;
