import { useState } from 'react';
import styled from 'styled-components';
import { CardHeading } from '../StyledElements/Headings.styled';
import Paragraph from '../StyledElements/Paragraphs.styled';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

const StyledArticle = styled.article`
  text-align: left;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.secondaryBg};

  &:hover,
  &:focus {
    cursor: pointer;
  }

  .question {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-text {
      &.question-active {
        color: var(--yellow);
      }
    }
  }

  .faq-icon {
    color: var(--yellow);
    font-size: var(--lg);
  }
`;

const Faq = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <StyledArticle onClick={() => setShowInfo(!showInfo)}>
      <header className='question'>
        <CardHeading
          className={`question-text ${showInfo && 'question-active'}`}
        >
          {question}
        </CardHeading>
        {showInfo ? (
          <RiArrowDownSLine className='faq-icon' />
        ) : (
          <RiArrowUpSLine className='faq-icon' />
        )}
      </header>
      {showInfo && <Paragraph faq>{answer}</Paragraph>}
    </StyledArticle>
  );
};

export default Faq;
