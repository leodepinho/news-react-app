import React, {Component} from 'react';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="primary-search-wrapper kt-pos-fixed kt-left-0 kt-top-0 kt-right-0">
        <nav className="header-wrapper">
          <div className="header-content kt-flex kt-align-items-center kt-justify-content-start">
            <div className="logo kt-flex">
              <h1>Breaking News</h1>
            </div>
            <div className="kt-flex kt-flex-grow-1"/>
            <div className="search-button">
              <a aria-label="Search for streams" className="nav-item">
                <div className="searchbox-container">
                  <span className="inactive-search kt-flex-grow-1">Search</span>
                  <svg role="img" aria-hidden="true" focusable="false" width={20} height={20} viewBox="0 0 10 10">
                    <path fill="#ffffff" d="M7.73732912,6.67985439 C7.75204857,6.69246326 7.76639529,
        6.70573509 7.7803301,6.7196699 L9.65165045,8.59099025 C9.94454365,
        8.8838835 9.94454365,9.3587572 9.65165045,9.65165045 C9.3587572,
        9.94454365 8.8838835,9.94454365 8.59099025,9.65165045 L6.7196699,
        7.7803301 C6.70573509,7.76639529 6.69246326,7.75204857 6.67985439,
        7.73732912 C5.99121283,8.21804812 5.15353311,8.5 4.25,8.5 C1.90278981,
        8.5 0,6.59721019 0,4.25 C0,1.90278981 1.90278981,0 4.25,0 C6.59721019,
        0 8.5,1.90278981 8.5,4.25 C8.5,5.15353311 8.21804812,5.99121283
        7.73732912,6.67985439 L7.73732912,6.67985439 Z M4.25,7.5 C6.04492544,
        7.5 7.5,6.04492544 7.5,4.25 C7.5,2.45507456 6.04492544,1 4.25,1
        C2.45507456,1 1,2.45507456 1,4.25 C1,6.04492544 2.45507456,7.5 4.25,
        7.5 L4.25,7.5 Z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;