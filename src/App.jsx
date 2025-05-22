import { createContext, useState } from 'react';
import './App.css';
import GeneralLayout from './Container/Layouts/GeneralLayout';

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <GeneralLayout setTheme={setTheme}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
