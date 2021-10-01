import styled from 'styled-components';
import { sectionSpacingMd, maxWidthLg, threeCol } from '../../abstracts/Mixins';
import { SectionHeading } from '../StyledElements/Headings.styled';
import CompanyValuesCard from './CompanyValuesCard';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  text-align: center;

  .values {
    ${sectionSpacingMd}
    ${threeCol}
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
