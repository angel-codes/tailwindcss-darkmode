import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

function App() {
  // local state
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );

  // function to toggle dark mode
  const handleDarkMode = e => {
    // todo : change properties
  };

  return (
    <div className="transition-colors ease-in duration-300 text-center bg-blue-100 dark:bg-blue-900">
      <header className="min-h-screen flex flex-col justify-center items-center">
        <img
          src={logo}
          style={{ height: '40vmin' }}
          className="animate-spin-slow pointer-events-none"
          alt="logo"
        />
        <p className="mb-2 text-blue-900 dark:text-blue-100">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label className="switch">
          <input
            type="checkbox"
            defaultValue={isDark}
            onChange={handleDarkMode}
          />
          <span className="slider round" />
        </label>
      </header>
    </div>
  );
}

export default App;
