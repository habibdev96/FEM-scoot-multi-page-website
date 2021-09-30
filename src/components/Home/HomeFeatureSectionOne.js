import styled from 'styled-components';
import { SectionHeading } from '../StyledElements/Headings.styled';
import Paragraph from '../StyledElements/Paragraphs.styled';
import StyledButton from '../StyledElements/Buttons.styled';
import { sectionSpacingMd, maxWidthLg, twoCol } from '../../abstracts/Mixins';
import showcase from '../../assets/images/telemetry.jpg';
import patternCircle from '../../assets/patterns/circle.svg';
import patternCircleDark from '../../assets/patterns/circledark.svg';
import patternArrow from '../../assets/patterns/left-downward-arrow.svg';
import { useGlobalContext } from '../../context';

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;

  .showcase {
    position: relative;
    z-index: 10;
    border-radius: 50%;
  }

  .pattern {
    position: absolute;

    &--arrow {
      z-index: 10;
      width: 60%;
      top: 60%;
      right: 0;
    }

    &--circle {
      z-index: 1;
      width: 30%;
      right: -20%;
      top: 20%;
    }
  }
`;

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  ${twoCol}
`;

const HomeFeatureSectionOne = () => {
  const { theme } = useGlobalContext();

  return (
    <StyledSection>
      <Container>
        <div>
          <SectionHeading>Easy to use riding telemetry</SectionHeading>
          <Paragraph>
            The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app.
          </Paragraph>
          <StyledButton to='/About' primary={+true}>
            Learn More
          </StyledButton>
        </div>
        <img
          src={showcase}
          alt='woman looking at her phone'
          className='showcase'
        />
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

export default HomeFeatureSectionOne;
