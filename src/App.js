import React from 'react'
import './App.css';
import image from './Components/assets/images/image-header-desktop.jpg'

function App() {
  return (
    <div className="container">
      <div className="pcard-container">
        <div className="card1">
          <h3 className="heading">Get <span className="header">insights</span> that help your business grow.</h3>
          <p className="pera">Discover the benefits of data analytics and make better decisions regarding revenue,
            customer experience, and overall efficiency.</p>
          <div className="table-container">
            <div className="table">
              <span className="topLabel">10k+</span>
              <span className="label">COMPANIES</span>
            </div>
            <div className="table">
              <span className="topLabel">314</span>
              <span className="label">TEMPLATES</span>
            </div>
            <div className="table">
              <span className="topLabel">12M+</span>
              <span className="label">QUERIES</span>
            </div>
          </div>
        </div>
        <div className="card2"></div>
      </div>
    </div>
  );
}

export default App;
