import styled from 'styled-components';
import { HeroHeading } from '../StyledElements/Headings.styled';
import Paragraph from '../StyledElements/Paragraphs.styled';
import { StyledButton } from '../StyledElements/Buttons.styled';
import bgImage from '../../assets/images/home-hero-desktop.jpg';
import line from '../../assets/patterns/line.svg';
import rightArrow from '../../assets/patterns/right-arrow.svg';
import circles from '../../assets/patterns/white-circles.svg';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const StyledHeader = styled.header`
  background: url(${bgImage}) center center/cover no-repeat;
  height: 80vh;
  width: 100vw;
  overflow: hidden;
  padding-top: 5rem;

  ${Responsive.xl`
    height: 100vh;
  `}
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > div {
    position: absolute;
    top: 15rem;
    left: 15%;
    width: 35%;

    ${Responsive.xl`
      top: 10rem;
      left: 10%;
      width: 75%;
      text-align: center;
    `}

    ${Responsive.sm`
      position: static;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 0 2rem;
    `}

    & > div {
      margin-left: 5rem;

      ${Responsive.xl`
        margin-left: 0;
      `}
    }
  }

  .pattern {
    position: absolute;

    &--line {
      width: 15%;
      top: 35rem;
      left: 0;

      ${Responsive.xl`
        display: none;
      `}
    }

    &--arrow {
      width: 35%;
      top: 35rem;
      right: 15%;

      ${Responsive.xl`
        width: 50%;
        top: 58rem;
        left: 0;
      `}

      ${Responsive.sm`
        top: 70rem;
      `}
    }

    &--circles {
      width: 15%;
      top: 47rem;
      right: -2%;

      ${Responsive.xl`
        width: 30%;
        top: 65rem;
      `}
    }
  }
`;

const HomeHero = () => {
  const { scrollToTop } = useGlobalContext();

  return (
    <StyledHeader>
      <Container>
        <img src={line} alt='' className='pattern pattern--line' />
        <div>
          <HeroHeading data-aos='fade-in'>
            Scooter sharing <br /> made simple
          </HeroHeading>
          <div>
            <Paragraph light data-aos='fade-in' data-aos-delay='100'>
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you’re away!
            </Paragraph>
            <div data-aos='fade-in' data-aos-delay='200'>
              <StyledButton
                to='/Location'
                primary={+true}
                onClick={scrollToTop}
              >
                Get Scootin
              </StyledButton>
            </div>
          </div>
        </div>
        <img src={rightArrow} alt='' className='pattern pattern--arrow' />
        <img src={circles} alt='' className='pattern pattern--circles' />
      </Container>
    </StyledHeader>
  );
};

export default HomeHero;
