import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { headingStyles } from '../../abstracts/Mixins';

export const StyledButton = styled(Link)`
  display: inline-block;
  font-size: 1.5rem;
  padding: 1.5rem 4rem;
  text-align: center;
  transition: var(--mainTransition);

  ${({ primary }) =>
    primary &&
    css`
      ${headingStyles}
      background-color: var(--yellow);
      color: var(--white);
      border: 0.2rem solid var(--yellow);

      &:hover,
      &:focus {
        background-color: transparent;
        color: var(--yellow);
      }
    `}
`;
