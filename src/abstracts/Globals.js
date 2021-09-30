import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  :root {
    /* colors */
    --white: hsl(0, 0%, 100%);
    --snow: hsl(214, 37%, 96%); 
    --yellow: hsl(40, 97%, 58%);
    --lightYellow: hsl(39, 100%, 94%);
    --darkNavy: hsl(216, 17%, 35%);
    --darkerNavy: hsl(215, 14%, 23%);
    --dimGray: hsl(217, 12%, 62%);
    --lightGray: hsl(212, 41%, 93%);

    /* radius */
    --mainRadius: 1rem;

    /* grid gap */
    --gap: 5rem; 
      
    /* shadows */
    --mainShadow: 0.1rem 0.5rem 1rem rgba(0, 0, 0, .1);

    /* transitions */
    --mainTransition: all 0.2s ease-in-out;

    /* font sizes */
    --xxl: 4.5rem;
    --xl: 4rem;
    --lg: 3.5rem;
    --md: 3rem;
    --sm: 2.5rem;
    --xs: 2rem;
    --xxs: 1.6rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
    background: #000;
    background-color: ${({ theme }) => theme.mainBg};
    transition: var(--mainTransition);
  }

  img {
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export default Globals;
