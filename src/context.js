import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
