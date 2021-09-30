import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context';
import { FiSun, FiMoon } from 'react-icons/fi';

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
