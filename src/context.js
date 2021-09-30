import React, { useState, useContext } from 'react';
import { linksData, homeFeatureCardsData } from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [links, setLinks] = useState(linksData);
  const [homeFeatureCards, setHomeFeatureCards] =
    useState(homeFeatureCardsData);

  const themeToggler = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.className = 'dark-mode';
    } else {
      setTheme('light');
      document.body.className = 'light-mode';
    }
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider
      value={{ theme, themeToggler, links, homeFeatureCards }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);