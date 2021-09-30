import styled from 'styled-components';
import { CardHeading } from '../StyledElements/Headings.styled';
import Paragraph from '../StyledElements/Paragraphs.styled';

const StyledArticle = styled.article`
  position: relative;

  .icon {
    position: relative;
    width: 10rem;
    margin-bottom: 2rem;
    z-index: 10;
  }

  &::before {
    content: '';
    position: absolute;
    top: 15%;
    left: -90%;
    z-index: 1;
    height: 1rem;
    width: 100%;
    background-color: ${({ theme }) => theme.secondaryBg};
  }
`;

const HomeFeatureCard = ({ icon, title, description }) => {
  return (
    <StyledArticle>
      <img src={icon} alt={title} className='icon' />
      <CardHeading>{title}</CardHeading>
      <Paragraph>{description}</Paragraph>
    </StyledArticle>
  );
};

export default HomeFeatureCard;
