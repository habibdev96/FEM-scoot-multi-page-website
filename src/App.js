import Globals from './abstracts/Globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './abstracts/Themes';
import { useGlobalContext } from './context';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Careers from './pages/Careers';
import Navbar from './components/Shared/Navbar';
import Cta from './components/Shared/Cta';
import Footer from './components/Shared/Footer';

// TODO: make responsive | aos.js | mobile menu

const App = () => {
  AOS.init({ offset: 10, duration: 1000, once: true });
  const { theme } = useGlobalContext();

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Globals />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Location' component={Location} />
            <Route exact path='/Careers' component={Careers} />
          </Switch>
          <Cta />
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
