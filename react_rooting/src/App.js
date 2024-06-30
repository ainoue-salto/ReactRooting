import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import Home from './component/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
