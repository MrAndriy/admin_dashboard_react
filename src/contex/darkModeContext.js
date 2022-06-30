import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';

const ININTIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(ININTIAL_STATE);

export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, ININTIAL_STATE);
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
