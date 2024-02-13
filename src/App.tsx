import { createContext, useState } from 'react';
import { useLocation } from 'react-router';
import { Outlet } from 'react-router';
import { StyleApp } from './App.styles';
import { NavBar } from './components/NavBar/NavBar';
import { Span } from './pages/DatePage/DatePage.styles';

import { ContextType, IFormData } from './types/types';

const emptyData = {
  address: '',
  companyName: '',
  email: '',
  fullName: '',
  phone: '',
  position: '',
  website: '',
};

export const ThemeContext = createContext<ContextType>({
  color: '',
  setColor: () => '',
  data: emptyData,
  setData: () => {},
  isFormFilled: false,
  setIsFormFilled: () => false,
});

export const App = () => {
  const [color, setColor] = useState('grey');
  const [data, setData] = useState<IFormData>(emptyData);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const history = useLocation();

  return (
    <ThemeContext.Provider
      value={{ color, setColor, data, setData, isFormFilled, setIsFormFilled }}
    >
      <StyleApp>
        <NavBar />
        <Outlet />
        {history.key === 'default' && <Span>Choose an exercise</Span>}
      </StyleApp>
    </ThemeContext.Provider>
  );
};
