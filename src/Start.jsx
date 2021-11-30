import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="App">
      
      <ul>
        <li><Link to="/story">Story</Link></li>
        <li><Link to="/api">API</Link></li>
        <li><Link to="/bug">Bug</Link></li>
      </ul>
      
    </div>
  );
}

export default Start;
