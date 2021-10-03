import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { headingStyles } from '../../abstracts/Mixins';

const StyledLink = styled(Link)`
  ${headingStyles}
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: var(--mainTransition);

  ${({ mobile }) => mobile && `font-size: 2.5rem;`}

  &:hover,
  &:focus {
    color: var(--yellow);
  }
`;

export default StyledLink;
