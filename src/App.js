import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

function App() {
  // local state
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'scheme-dark' ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .classList.add(localStorage.getItem('theme'));
  }, []);

  // function to toggle dark mode
  const handleDarkMode = e => {
    const html = document.getElementsByTagName('html')[0];

    if (html.classList.contains('scheme-dark')) {
      // enable light mode
      localStorage.setItem('theme', 'scheme-light');
      html.classList.remove('scheme-dark');
      html.classList.add(localStorage.getItem('theme'));
      setIsDark(false);
    } else {
      // enable dark mode
      localStorage.setItem('theme', 'scheme-dark');
      html.classList.remove('scheme-light');
      html.classList.add(localStorage.getItem('theme'));
      setIsDark(true);
    }
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
      {/* you need this span to prevent tailwind to purge schema-dark */}
      <span className="scheme-dark"></span>
    </div>
  );
}

export default App;
