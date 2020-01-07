import React from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();

  return (
    <header className="App-header">
      <p>
        Selamat Datang { localStorage.getItem('email') } / { localStorage.getItem('password') }
      </p>
      <a
        className="App-link"
        rel="noopener noreferrer"
        style={{ color: 'blue' }}
        onClick={() => { localStorage.removeItem('email'); localStorage.removeItem('password'); history.push('/') }}
      >
        Sign Out
      </a>
    </header>
  )
}