import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the HomePage!</h1>
      <button onClick={onLogout} className="btn btn-danger">Cerrar Sesión</button>
    </div>
  );
}

export default HomePage;