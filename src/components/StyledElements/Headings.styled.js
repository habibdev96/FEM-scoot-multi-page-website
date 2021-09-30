import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-size: 5.6rem;
  color: var(--white);
`;

export const CardHeading = styled.h4`
  ${headingStyles}
  font-size: 2.4rem;
  color: ${({ theme }) => theme.heading};
`;