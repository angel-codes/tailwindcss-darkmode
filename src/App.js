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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
