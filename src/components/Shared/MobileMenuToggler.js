import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const Button = styled.button`
  display: none;
  background: transparent;
  outline: 0;
  border: 0;
  z-index: 2000;

  ${Responsive.lg`
    display: block;
  `}

  .icon {
    color: ${({ theme }) => theme.heading};
    font-size: var(--md);
  }
`;

const MobileMenuToggler = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
      {!isSidebarOpen ? (
        <FaBars className='icon' />
      ) : (
        <FaTimes className='icon' />
      )}
    </Button>
  );
};

export default MobileMenuToggler;
