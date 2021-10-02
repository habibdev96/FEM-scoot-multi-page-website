import styled from 'styled-components';
import {
  sectionSpacingMd,
  maxWidthLg,
  threeCol,
  twoCol,
} from '../../abstracts/Mixins';
import { SectionHeading } from '../StyledElements/Headings.styled';
import CompanyValuesCard from './CompanyValuesCard';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  text-align: center;

  .values {
    ${sectionSpacingMd}
    ${threeCol}

    ${Responsive.xl`
      ${twoCol}
    `}

    ${Responsive.xl`
      grid-template-columns: 1fr;
    `}
  }
`;

const CompanyValuesCards = ({ title }) => {
  const { companyValues } = useGlobalContext();

  return (
    <section>
      <Container>
        <SectionHeading>{title}</SectionHeading>
        <div className='values'>
          {companyValues.map((value) => (
            <CompanyValuesCard key={value.id} {...value} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CompanyValuesCards;
