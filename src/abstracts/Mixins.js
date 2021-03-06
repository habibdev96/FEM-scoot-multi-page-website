import { css } from 'styled-components';

const flexAlign = css`
  display: flex;
  align-items: center;
  gap: var(--gap);
`;

const twoCol = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: var(--gap);
`;

const threeCol = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: var(--gap);
`;

const headingStyles = css`
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.1rem;
  line-height: 1.1;
`;

const textStyles = css`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  letter-spacing: 0.1rem;
  line-height: 1.8;
`;

const sectionSpacingSm = css`
  padding: 5rem 2rem;
`;

const sectionSpacingMd = css`
  padding: 10rem 2rem;
`;

const sectionSpacingLg = css`
  padding: 20rem 2rem;
`;

const maxWidthSm = css`
  max-width: 1000px;
  margin: 0 auto;
`;

const maxWidthMd = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const maxWidthLg = css`
  max-width: 1400px;
  margin: 0 auto;
`;

export {
  flexAlign,
  twoCol,
  threeCol,
  headingStyles,
  textStyles,
  sectionSpacingSm,
  sectionSpacingMd,
  sectionSpacingLg,
  maxWidthSm,
  maxWidthMd,
  maxWidthLg,
};
