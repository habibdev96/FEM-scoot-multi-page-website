import styled from 'styled-components';
import { HeroHeading } from '../StyledElements/Headings.styled';
import Paragraph from '../StyledElements/Paragraphs.styled';
import { StyledButton } from '../StyledElements/Buttons.styled';
import bgImage from '../../assets/images/home-hero-desktop.jpg';
import line from '../../assets/patterns/line.svg';
import rightArrow from '../../assets/patterns/right-arrow.svg';
import circles from '../../assets/patterns/white-circles.svg';

const StyledHeader = styled.header`
  background: url(${bgImage}) center center/cover no-repeat;
  height: 80vh;
  width: 100vw;
  overflow: hidden;
  padding-top: 5rem;
`;

const Container = styled.div`
  position: relative;

  & > div {
    position: absolute;
    top: 15rem;
    left: 15%;
    width: 35%;

    & > div {
      margin-left: 5rem;
    }
  }

  .pattern {
    position: absolute;

    &--line {
      width: 15%;
      top: 35rem;
      left: 0;
    }

    &--arrow {
      width: 35%;
      top: 35rem;
      right: 15%;
    }

    &--circles {
      width: 15%;
      top: 47rem;
      right: -2%;
    }
  }
`;

const HomeHero = () => {
  return (
    <StyledHeader>
      <Container>
        <img src={line} alt='' className='pattern pattern--line' />
        <div>
          <HeroHeading>
            Scooter sharing <br /> made simple
          </HeroHeading>
          <div>
            <Paragraph light>
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you’re away!
            </Paragraph>
            <StyledButton to='/Location' primary={+true}>
              Get Scootin
            </StyledButton>
          </div>
        </div>
        <img src={rightArrow} alt='' className='pattern pattern--arrow' />
        <img src={circles} alt='' className='pattern pattern--circles' />
      </Container>
    </StyledHeader>
  );
};

export default HomeHero;
