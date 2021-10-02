import styled from 'styled-components';
import { CardHeading } from '../StyledElements/Headings.styled';
import Paragraph from '../StyledElements/Paragraphs.styled';
import { StyledButton } from '../StyledElements/Buttons.styled';
import { flexAlign } from '../../abstracts/Mixins';

const StyledArticle = styled.article`
  ${flexAlign}
  justify-content: space-between;
  margin: 5rem 0;
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.secondaryBg};
`;

const Position = ({ position, location }) => {
  return (
    <StyledArticle>
      <div>
        <CardHeading>{position}</CardHeading>
        <Paragraph>{location}</Paragraph>
      </div>
      <StyledButton primary={+true} to='#!'>
        Apply
      </StyledButton>
    </StyledArticle>
  );
};

export default Position;
