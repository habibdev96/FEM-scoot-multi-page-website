import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context';
import { FiSun, FiMoon } from 'react-icons/fi';
import Responsive from '../../abstracts/Responsive';

const Toggler = styled.button`
  ${textStyles}
  color: ${({ theme }) => theme.heading};
  font-size: 1.5rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 1rem;
  outline: 0;
  border: 0;
  background-color: transparent;
  transition: var(--mainTransition);

  ${Responsive.sm`
    font-size: 1.3rem;
  `}

  &:hover,
  &:focus {
    color: var(--yellow);
  }
`;

const ThemeToggleButton = () => {
  const { theme, themeToggler } = useGlobalContext();

  return (
    <Toggler onClick={themeToggler}>
      {theme === 'light' ? 'dark' : 'light'}
      {theme === 'light' ? (
        <FiMoon className='icon' />
      ) : (
        <FiSun className='icon' />
      )}
    </Toggler>
  );
};

export default ThemeToggleButton;
