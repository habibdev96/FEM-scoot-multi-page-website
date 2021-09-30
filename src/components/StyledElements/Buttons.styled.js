import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { headingStyles } from '../../abstracts/Mixins';

const StyledButton = styled(Link)`
  ${({ primary }) =>
    primary &&
    css`
      ${headingStyles}
      font-size: 1.5rem;
      background-color: var(--yellow);
      color: var(--snow);
      padding: 1.5rem 2rem;
      border: 0.2rem solid var(--yellow);
      transition: var(--mainTransition);

      &:hover,
      &:focus {
        background-color: transparent;
        color: var(--yellow);
      }
    `}
`;

export default StyledButton;
