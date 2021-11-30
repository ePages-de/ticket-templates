import '../NewAgeTheme.css';
import './Start.css';
import Footer from '../components/Footer';

import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div className="container px-5">
          <h1>Ticket templates</h1>
        </div>
      </nav>
      
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-12">
              <ul>
                <li><Link to="/story">Story</Link></li>
                <li><Link to="/api">API</Link></li>
                <li><Link to="/bug">Bug</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      
      <div className="fixedFooter">
        <Footer />
      </div>
    </div>
  );
}

export default Start;
