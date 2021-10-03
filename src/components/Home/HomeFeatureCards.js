import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import { sectionSpacingMd, maxWidthLg, threeCol } from '../../abstracts/Mixins';
import HomeFeatureCard from './HomeFeatureCard';
import Responsive from '../../abstracts/Responsive';

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  ${threeCol}

  ${Responsive.lg`
    grid-template-columns: 1fr;
  `}
`;

const HomeFeatureCards = () => {
  const { homeFeatureCards } = useGlobalContext();

  return (
    <section>
      <Container data-aos='fade-in'>
        {homeFeatureCards.map((card) => (
          <HomeFeatureCard key={card.id} {...card} />
        ))}
      </Container>
    </section>
  );
};

export default HomeFeatureCards;
