import styled from 'styled-components';
import { SectionHeading } from '../StyledElements/Headings.styled';
import {
  maxWidthLg,
  sectionSpacingMd,
  flexAlign,
} from '../../abstracts/Mixins';
import circles from '../../assets/patterns/semi-circles.svg';
import appStoreIcon from '../../assets/icons/app-store.svg';
import googlePlayIcon from '../../assets/icons/google-play.svg';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--darkNavy);

  .pattern {
    position: absolute;
    bottom: 0;
    right: -10%;
    width: 70%;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  ${flexAlign}
  justify-content: space-between;
  flex-wrap: wrap;

  ${Responsive.lg`
    justify-content: center;
    text-align: center;
  `}

  & > div {
    ${flexAlign}
  }

  .icon {
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`;

const Cta = () => {
  return (
    <StyledSection>
      <Container>
        <SectionHeading light>
          Sign up and <br /> Scoot off today
        </SectionHeading>
        <div>
          <a href='#!' className='icon'>
            <img src={appStoreIcon} alt='' />
          </a>
          <a href='#!' className='icon'>
            <img src={googlePlayIcon} alt='' />
          </a>
        </div>
      </Container>
      <img src={circles} alt='' className='pattern' />
    </StyledSection>
  );
};

export default Cta;
