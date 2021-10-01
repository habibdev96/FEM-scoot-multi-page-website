import SubHero from '../components/Shared/SubHero';
import bg from '../assets/images/careers-locations-hero-desktop.jpg';
import { useGlobalContext } from '../context';

const Careers = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <SubHero title='Careers' bg={bg} />
    </>
  );
};

export default Careers;
