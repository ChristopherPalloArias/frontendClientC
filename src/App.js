import React, { useState } from 'react';
import Login from './Login';
import HomePage from './HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? <HomePage onLogout={handleLogout} /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default App;