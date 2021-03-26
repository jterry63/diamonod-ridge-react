import React, { Component } from 'react';

class Nav extends React.Component {
    render() {
      return (
      <nav className="navbar navbar-expand-lg navbar-light" id="nav">
      <a className="navbar-brand" href="#"><img src="../public/img/logo-img.png" style={{height: '66px', width: '188px'}} /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item navbar-collapse" style={{marginRight: '5px'}}>
            <a className="nav-link" href="#">HOME</a>
          </li>
          <li className="nav-item navbar-collapse">
            <a className="nav-link" href="#features">ABOUT</a>
          </li>
          <li className="nav-item navbar-collapse">
            <a className="nav-link" href="#about">SERVICES</a>
          </li>
          <li className="nav-item navbar-collapse">
            <a className="nav-link" href="#projects">PROJECTS</a>
          </li>
          <li className="nav-item navbar-collapse">
            <a className="nav-link" href="#contact">CONTACT US</a>
          </li>
          <li className="nav-item navbar-collapse">
            <a className="box-btn" href="#quote">REQUEST FREE ESTIMATE</a>
          </li>
          <br />
          <li className="nav-item" id="mobile-nav-item">
            <a className="box-btn" href="tel:3852613262">(385) 261-3262</a>
          </li>
        </ul>
      </div>
    </nav>
    );
    }
  }

  export default Nav;