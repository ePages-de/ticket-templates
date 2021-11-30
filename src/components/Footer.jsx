import './Footer.css';

import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-center py-5">
      <div className="container px-5">
          <div className="text-white-50 small">
              <div className="mb-2">
                © ePages GmbH 2021. All rights reserved.
              </div>
              <a href="https://epages.com/en/legal-notice">
                Imprint
              </a>
          </div>
      </div>
    </footer>
	);
}

export default Footer;
