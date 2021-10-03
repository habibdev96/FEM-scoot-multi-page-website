import styled from 'styled-components';
import logodark from '../../assets/logo.svg';
import logolight from '../../assets/logolight.svg';
import { Link } from 'react-router-dom';
import StyledLink from '../StyledElements/Link.styled';
import { StyledButton } from '../StyledElements/Buttons.styled';
import ThemeToggleButton from './ThemeToggleButton';
import { maxWidthLg, flexAlign } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';
import MobileMenuToggler from './MobileMenuToggler';

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 3000;
  transition: var(--mainTransition);
  background-color: ${({ theme }) => theme.mainBg};
`;

const Container = styled.div`
  padding: 2rem;
  ${maxWidthLg}
  ${flexAlign}
  justify-content: space-between;

  ${Responsive.lg`
    align-items: flex-start;
  `}

  .logo {
    width: 15rem;

    ${Responsive.lg`
      width: 10rem;
    `}
  }

  .left,
  .right,
  .links {
    ${flexAlign}

    ${Responsive.sm`
      align-items: start;
      gap: 2rem;
    `}
  }

  .links,
  .btn {
    ${Responsive.lg`
      display: none;
    `}
  }
`;

const Navbar = () => {
  const { theme, links, scrollToTop, setIsSidebarOpen } = useGlobalContext();

  return (
    <StyledNav>
      <Container>
        <div className='left'>
          <Link
            to='/'
            onClick={() => {
              scrollToTop();
              setIsSidebarOpen(false);
            }}
          >
            <img
              src={theme === 'light' ? logodark : logolight}
              alt='scoot logo'
              className='logo'
            />
          </Link>
          <ul className='links'>
            {links.map((link) => (
              <li key={link.id}>
                <StyledLink to={link.path} onClick={scrollToTop}>
                  {link.text}
                </StyledLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='right'>
          <ThemeToggleButton />
          <StyledButton
            className='btn'
            to='/Location'
            primary={+true}
            onClick={scrollToTop}
          >
            Get Scootin
          </StyledButton>
          <MobileMenuToggler />
        </div>
      </Container>
    </StyledNav>
  );
};

export default Navbar;
