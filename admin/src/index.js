import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeProvider } from './contex/darkModeContext';
import { AuthContextProvider } from './contex/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
