import styled from 'styled-components';
import {
  maxWidthLg,
  sectionSpacingSm,
  flexAlign,
} from '../../abstracts/Mixins';
import StyledLink from '../StyledElements/Link.styled';
import logo from '../../assets/logolight.svg';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const StyledFooter = styled.footer`
  background-color: var(--darkerNavy);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  ${flexAlign}
  justify-content: space-between;

  .logo {
    width: 15rem;
  }

  & > div,
  .links {
    ${flexAlign}
  }

  .social svg {
    color: var(--yellow);
    font-size: var(--md);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--snow);
    }
  }
`;

const Footer = () => {
  const { links, socials } = useGlobalContext();

  return (
    <StyledFooter>
      <Container>
        <div>
          <Link to='/'>
            <img src={logo} alt='scoot logo' className='logo' />
          </Link>
          <ul className='links'>
            {links.map((link) => (
              <li key={link.id}>
                <StyledLink to={link.path}>{link.text}</StyledLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='socials'>
          {socials.map((social) => (
            <a key={social.id} href={social.path} className='social'>
              {social.icon}
            </a>
          ))}
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
