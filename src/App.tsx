import { createContext, useState } from 'react';
import { Outlet } from 'react-router';
import { StyleApp } from './App.styles';
import { NavBar } from './components/NavBar/NavBar';

export type ContextType = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ContextType>({
  color: '',
  setColor: () => '',
});

export const App = () => {
  const [color, setColor] = useState('grey');
  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      <StyleApp>
        <NavBar />
        <Outlet />
      </StyleApp>
    </ThemeContext.Provider>
  );
};
