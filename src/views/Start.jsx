import '../NewAgeTheme.css';
import './Start.css';

import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

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
    
            <div>
              <Link to="/story">
                <div className="tile blue">
                  <h3 className="title"><i className="bi bi-book"></i>
                    Story
                  </h3>
                </div>
              </Link>
            </div>
        
            <div>
              <Link to="/bug">
                <div className="tile blue">
                  <h3 className="title"><i className="bi bi-bug"></i>
                    Bug
                  </h3>
                </div>
              </Link>
            </div>
            
            <div>
              <Link to="/api">
                <div className="tile blue">
                  <h3 className="title"><i className="bi bi-code-slash"></i>
                    API
                  </h3>
                </div>
              </Link>
            </div>
            
            <div>
              <Link to="/task">
                <div className="tile blue">
                  <h3 className="title"><i className="bi bi-list-check"></i>
                    Task
                  </h3>
                </div>
              </Link>
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
