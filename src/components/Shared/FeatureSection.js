import styled from 'styled-components';
import { SectionHeading } from '../StyledElements/Headings.styled';
import Paragraph from '../StyledElements/Paragraphs.styled';
import { StyledButton } from '../StyledElements/Buttons.styled';
import { sectionSpacingMd, maxWidthLg, twoCol } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;

  ${Responsive.lg`
    text-align: center;
  `}

  .showcase {
    position: relative;
    z-index: 5;
    border-radius: 50%;
    width: 75%;
    margin: 0 auto;

    &.left {
      order: -1;
    }

    ${Responsive.lg`
      order: -1;
    `}
  }

  // bg pattern styles based on id of section
  .pattern {
    position: absolute;

    &-arrow {
      &-1 {
        width: 60%;
        top: 60%;
        right: 0;
        z-index: 10;

        ${Responsive.lg`
          top: 30%; 
        `}
      }

      &-2 {
        width: 30%;
        top: 20%;
        left: 0;
        z-index: 10;
      }

      &-3 {
        width: 50%;
        top: 30%;
        right: -20%;
        z-index: 10;
      }
    }

    &-circle {
      z-index: 1;

      &-1,
      &-3 {
        width: 30%;
        right: -20%;
        top: 20%;
      }

      &-2 {
        width: 30%;
        left: -20%;
        top: 20%;
      }
    }
  }
`;

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  ${twoCol}

  ${Responsive.lg`
    grid-template-columns: 1fr;
  `}
`;

const FeatureSection = ({
  id,
  title,
  description,
  showcase,
  alt,
  showButton,
  buttonText,
  buttonPath,
  patterns: { circle, circleDark, arrow },
}) => {
  const { theme, scrollToTop } = useGlobalContext();

  return (
    <StyledSection>
      <Container>
        <div className='info' data-aos='fade-in'>
          <SectionHeading>{title}</SectionHeading>
          <Paragraph>{description}</Paragraph>
          {showButton && (
            <StyledButton to={buttonPath} primary={+true} onClick={scrollToTop}>
              {buttonText}
            </StyledButton>
          )}
        </div>
        <img
          src={showcase}
          alt={alt}
          className={`showcase ${id === 2 && 'left'}`}
          data-aos='fade-in'
          data-aos-delay='200'
        />
      </Container>
      <img src={arrow} alt='' className={`pattern pattern-arrow-${id}`} />
      <img
        src={theme === 'light' ? circle : circleDark}
        alt=''
        className={`pattern pattern-circle-${id}`}
      />
    </StyledSection>
  );
};

export default FeatureSection;
