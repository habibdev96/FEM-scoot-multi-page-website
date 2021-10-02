import { css } from 'styled-components';

const breakpoints = {
  xs: '420px',
  sm: '550px',
  md: '700px',
  lg: '900px',
  xl: '1150px',
};

const Responsive = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default Responsive;
