import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import { sectionSpacingMd, maxWidthLg, threeCol } from '../../abstracts/Mixins';
import HomeFeatureCard from './HomeFeatureCard';

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  ${threeCol}
`;

const HomeFeatureCards = () => {
  const { homeFeatureCards } = useGlobalContext();

  return (
    <section>
      <Container>
        {homeFeatureCards.map((card) => (
          <HomeFeatureCard key={card.id} {...card} />
        ))}
      </Container>
    </section>
  );
};

export default HomeFeatureCards;
