import React, { useState, useContext } from 'react';
import {
  linksData,
  homeFeatureCardsData,
  socialsData,
  homeFeatureSectionsData,
  aboutFeatureSectionsData,
} from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [links, setLinks] = useState(linksData);
  const [homeFeatureCards, setHomeFeatureCards] =
    useState(homeFeatureCardsData);
  const [socials, setSocials] = useState(socialsData);
  const [homeFeatureSections, setHomeFeatureSections] = useState(
    homeFeatureSectionsData
  );
  const [aboutFeatureSections, setAboutFeatureSections] = useState(
    aboutFeatureSectionsData
  );

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
      value={{
        scrollToTop,
        theme,
        themeToggler,
        links,
        homeFeatureCards,
        homeFeatureSections,
        socials,
        aboutFeatureSections,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
