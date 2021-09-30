import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Paragraph = styled.p`
  ${textStyles}
  font-size: 1.6rem;
  padding: 2rem 0;
  color: ${({ theme }) => theme.text};
  ${({ light }) => light && 'color: var(--white);'}
`;

export default Paragraph;
