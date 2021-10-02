import styled from 'styled-components';
import { SectionHeading } from '../StyledElements/Headings.styled';
import { sectionSpacingMd, maxWidthLg, twoCol } from '../../abstracts/Mixins';
import Faq from './Faq';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  text-align: center;

  .faqs-group {
    ${twoCol}
    ${sectionSpacingMd}
    align-items: start;

    ${Responsive.lg`
      grid-template-columns: 1fr;
    `}
  }

  .faqs {
    display: flex;
    align-items: left;
    flex-direction: column;
    gap: var(--gap);
  }
`;

const Faqs = () => {
  const { faqs } = useGlobalContext();

  return (
    <section>
      <Container>
        <SectionHeading>FAQs</SectionHeading>
        <div className='faqs-group'>
          <SectionHeading>How it works</SectionHeading>
          <div className='faqs'>
            {faqs[0].map((faq) => (
              <Faq key={faq.id} {...faq} />
            ))}
          </div>
        </div>
        <div className='faqs-group'>
          <SectionHeading>Safe driving</SectionHeading>
          <div className='faqs'>
            {faqs[1].map((faq) => (
              <Faq key={faq.id} {...faq} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faqs;
