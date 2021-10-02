import styled from 'styled-components';
import { HeroHeading } from '../StyledElements/Headings.styled';
import circles from '../../assets/patterns/white-circles.svg';
import { maxWidthLg, flexAlign } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

const Container = styled.div`
  ${maxWidthLg}
  ${flexAlign}
  justify-content: space-between;
  padding: 20rem 2rem 10rem 2rem;

  ${Responsive.sm`
    justify-content: center;
  `}

  .pattern {
    position: absolute;
    right: -3%;
    width: 20%;

    ${Responsive.lg`
      width: 40%;
    `}

    ${Responsive.sm`
      display: none;
    `}
  }
`;

const SubHero = ({ title, bg }) => {
  return (
    <header
      style={{
        background: `url(${bg}) center center/cover no-repeat`,
        position: 'relative',
      }}
    >
      <Container>
        <HeroHeading>{title}</HeroHeading>
        <img src={circles} alt='' className='pattern' />
      </Container>
    </header>
  );
};

export default SubHero;
