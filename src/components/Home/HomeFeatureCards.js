import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import { sectionSpacingMd, maxWidthLg } from '../../abstracts/Mixins';
import HomeFeatureCard from './HomeFeatureCard';

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: var(--gap);
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
