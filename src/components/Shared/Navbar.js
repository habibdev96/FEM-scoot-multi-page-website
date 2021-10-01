import styled from 'styled-components';
import logodark from '../../assets/logo.svg';
import logolight from '../../assets/logolight.svg';
import { Link } from 'react-router-dom';
import StyledLink from '../StyledElements/Link.styled';
import { StyledButton } from '../StyledElements/Buttons.styled';
import ThemeToggleButton from './ThemeToggleButton';
import { maxWidthLg, flexAlign } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context';

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1000;
  transition: var(--mainTransition);
  background-color: ${({ theme }) => theme.mainBg};
`;

const Container = styled.div`
  padding: 2rem;
  ${maxWidthLg}
  ${flexAlign}
  justify-content: space-between;

  .logo {
    width: 15rem;
  }

  .left,
  .right,
  .links {
    ${flexAlign}
  }
`;

const Navbar = () => {
  const { theme, links } = useGlobalContext();

  return (
    <StyledNav>
      <Container>
        <div className='left'>
          <Link to='/'>
            <img
              src={theme === 'light' ? logodark : logolight}
              alt='scoot logo'
              className='logo'
            />
          </Link>
          <ul className='links'>
            {links.map((link) => (
              <li key={link.id}>
                <StyledLink to={link.path}>{link.text}</StyledLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='right'>
          <ThemeToggleButton />
          <StyledButton to='/Location' primary={+true}>
            Get Scootin
          </StyledButton>
        </div>
      </Container>
    </StyledNav>
  );
};

export default Navbar;
