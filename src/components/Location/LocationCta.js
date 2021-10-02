import styled from 'styled-components';
import { SectionHeading } from '../StyledElements/Headings.styled';
import Paragraph from '../StyledElements/Paragraphs.styled';
import { StyledButton } from '../StyledElements/Buttons.styled';
import {
  sectionSpacingSm,
  maxWidthSm,
  flexAlign,
} from '../../abstracts/Mixins';

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthSm}
  ${flexAlign}
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
        <StyledButton primary={+true} to='#!'>
          Message Us
        </StyledButton>
      </Container>
    </section>
  );
};

export default LocationCta;
