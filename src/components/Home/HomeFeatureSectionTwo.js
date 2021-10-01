import styled from 'styled-components';
import { SectionHeading } from '../StyledElements/Headings.styled';
import Paragraph from '../StyledElements/Paragraphs.styled';
import { StyledButton } from '../StyledElements/Buttons.styled';
import { sectionSpacingMd, maxWidthLg, twoCol } from '../../abstracts/Mixins';
import showcase from '../../assets/images/near-you.jpg';
import patternCircle from '../../assets/patterns/circle.svg';
import patternCircleDark from '../../assets/patterns/circledark.svg';
import patternArrow from '../../assets/patterns/right-arrow.svg';
import { useGlobalContext } from '../../context';

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;

  .showcase {
    position: relative;
    z-index: 10;
    border-radius: 50%;
    width: 75%;
    margin: 0 auto;
  }

  .pattern {
    position: absolute;

    &--arrow {
      z-index: 10;
      width: 30%;
      top: 20%;
      left: 0;
    }

    &--circle {
      z-index: 1;
      width: 30%;
      left: -20%;
      top: 20%;
    }
  }
`;

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  ${twoCol}
`;

const HomeFeatureSectionTwo = () => {
  const { theme } = useGlobalContext();

  return (
    <StyledSection>
      <Container>
        <img
          src={showcase}
          alt='woman looking at her phone'
          className='showcase'
        />
        <div>
          <SectionHeading>
            Coming to a city <br /> near you
          </SectionHeading>
          <Paragraph>
            Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year.
          </Paragraph>
          <StyledButton to='/About' primary={+true}>
            Learn More
          </StyledButton>
        </div>
      </Container>
      <img src={patternArrow} alt='' className='pattern pattern--arrow' />
      <img
        src={theme === 'light' ? patternCircle : patternCircleDark}
        alt=''
        className='pattern pattern--circle'
      />
    </StyledSection>
  );
};

export default HomeFeatureSectionTwo;
