import styled from 'styled-components';
import { SectionHeading } from '../StyledElements/Headings.styled';
import Paragraph from '../StyledElements/Paragraphs.styled';
import { StyledButton } from '../StyledElements/Buttons.styled';
import {
  sectionSpacingSm,
  maxWidthSm,
  flexAlign,
} from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthSm}
  ${flexAlign}

  ${Responsive.md`
    flex-wrap: wrap;
    text-align: center;
  `}

  .btn-container {
    ${Responsive.md`
      margin: 0 auto;
    `}
  }
`;

const LocationCta = () => {
  return (
    <section>
      <Container>
        <div>
          <SectionHeading>Your city not listed?</SectionHeading>
          <Paragraph>
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </Paragraph>
        </div>
        <div className='btn-container'>
          <StyledButton primary={+true} to='#!'>
            Message Us
          </StyledButton>
        </div>
      </Container>
    </section>
  );
};

export default LocationCta;
