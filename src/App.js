import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col justify-center items-center">
        <img
          src={logo}
          style={{ height: '40vmin' }}
          className="animate-spin-slow pointer-events-none"
          alt="logo"
        />
        <p className="mb-2">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" />
        </label>
      </header>
    </div>
  );
}

export default App;
