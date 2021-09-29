import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './abstracts/Themes';
import { useGlobalContext } from './context';
import Globals from './abstracts/Globals';

const App = () => {
  const { theme } = useGlobalContext();

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Globals />
      </ThemeProvider>
    </>
  );
};

export default App;
