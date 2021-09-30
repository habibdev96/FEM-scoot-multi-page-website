import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { headingStyles } from '../../abstracts/Mixins';

const StyledLink = styled(Link)`
  ${headingStyles}
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    color: var(--yellow);
  }
`;

export default StyledLink;
