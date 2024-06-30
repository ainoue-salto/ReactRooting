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
          {/* Routerの中にRouteを書く */}
          <Routes>
            {/* Routeの中にパスと対応するコンポーネントを書く */}
            <Route path="/" element={<Home />} />
            <Route path='/About' element={<About name="井上" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
