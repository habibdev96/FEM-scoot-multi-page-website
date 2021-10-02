import styled from 'styled-components';
import Position from './Position';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
`;

const Positions = () => {
  const { positions } = useGlobalContext();

  return (
    <section>
      <Container>
        {positions.map((pos) => (
          <Position key={pos.id} {...pos} />
        ))}
      </Container>
    </section>
  );
};

export default Positions;
