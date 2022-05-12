import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';

export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/despre' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App