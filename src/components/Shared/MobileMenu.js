import styled from 'styled-components';
import StyledLink from '../StyledElements/Link.styled';
import { StyledButton } from '../StyledElements/Buttons.styled';
import pattern from '../../assets/patterns/semi-circles.svg';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  height: 100vh;
  width: 100vw;

  @media (min-width: 800px) {
    display: none;
  }
`;

const StyledMobileMenu = styled.aside`
  background-color: ${({ theme }) => theme.mainBg};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50vw;
  z-index: 2100;
  overflow: hidden;
  transition: var(--mainTransition);

  ${Responsive.sm`
    width: 75%;
  `}

  ${Responsive.xs`
    width: 85%;
  `}

  @media (min-width: 800px) {
    display: none;
  }

  .info {
    text-align: left;
    padding: 10rem 2rem 0 2rem;

    li {
      margin: 3.5rem 0;
    }
  }

  .pattern {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const MobileMenu = () => {
  const { links, isSidebarOpen, setIsSidebarOpen, scrollToTop } =
    useGlobalContext();

  if (isSidebarOpen) {
    return (
      <Overlay onClick={() => setIsSidebarOpen(false)}>
        <StyledMobileMenu>
          <ul className='info'>
            {links.map((link) => (
              <li key={link.id}>
                <StyledLink
                  to={link.path}
                  onClick={() => {
                    setIsSidebarOpen(false);
                    scrollToTop();
                  }}
                  mobile={+true}
                >
                  {link.text}
                </StyledLink>
              </li>
            ))}
            <StyledButton primary={+true} onClick={scrollToTop} to='/Location'>
              Get Scootin
            </StyledButton>
          </ul>
          <img src={pattern} alt='' className='pattern' />
        </StyledMobileMenu>
      </Overlay>
    );
  } else {
    return null;
  }
};

export default MobileMenu;
