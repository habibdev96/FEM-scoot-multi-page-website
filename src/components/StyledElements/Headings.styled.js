import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-size: 5.6rem;
  color: var(--white);

  ${Responsive.sm`
    font-size: 4.3rem;
  `}
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 4.8rem;
  color: ${({ theme }) => theme.heading};
  ${({ light }) => light && 'color: var(--white);'};

  ${Responsive.sm`
    font-size: 3.5rem;
  `}
`;

export const CardHeading = styled.h4`
  ${headingStyles}
  font-size: 2.4rem;
  color: ${({ theme }) => theme.heading};

  ${Responsive.sm`
    font-size: 2rem;
  `}
`;
