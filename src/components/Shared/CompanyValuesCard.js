import styled from 'styled-components';
import { flexAlign, headingStyles } from '../../abstracts/Mixins';
import { CardHeading } from '../StyledElements/Headings.styled';
import Paragraph from '../StyledElements/Paragraphs.styled';

const StyledArticle = styled.article`
  position: relative;

  .image {
    width: 30rem;
    border-radius: 50%;
    margin-bottom: 8rem;
  }

  .number {
    ${flexAlign}
    ${headingStyles}
    justify-content: center;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--yellow);
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    margin: 0 auto;
    color: var(--darkNavy);
    font-size: 2.4rem;
  }
`;

const CompanyValuesCard = ({ image, alt, number, value, description }) => {
  return (
    <StyledArticle>
      <img src={image} alt={alt} className='image' />
      <h3 className='number'>{number}</h3>
      <CardHeading>{value}</CardHeading>
      <Paragraph>{description}</Paragraph>
    </StyledArticle>
  );
};

export default CompanyValuesCard;
