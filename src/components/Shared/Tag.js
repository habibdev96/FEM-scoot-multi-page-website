import styled from 'styled-components';
import { flexAlign, textStyles, headingStyles } from '../../abstracts/Mixins';
import logo from '../../assets/tag/habibdevgif.gif';

const StyledTag = styled.div`
  ${flexAlign}
  gap: 0;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;

  .heading {
    ${textStyles};
    color: var(--white);
    text-align: center;
    font-size: var(--xxs);
  }

  .link {
    ${headingStyles};
    color: var(--yellow);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .tag-logo {
    width: 5rem;
  }
`;

const Tag = () => {
  return (
    <StyledTag>
      <h3 className='heading'>
        project for{' '}
        <a
          href='https://www.frontendmentor.io/challenges/scoot-multipage-website-N76alNPRJ'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          frontend mentor
        </a>{' '}
        coded by{' '}
        <a
          href='https://github.com/habibdev96'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          habibdev{' '}
        </a>
      </h3>
      <img src={logo} alt='logo' className='tag-logo' />
    </StyledTag>
  );
};

export default Tag;
