import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { AddProducts } from './components/AddProducts';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
export class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/despre' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/adaugaproduse' element={<AddProducts/>}/>
            <Route path='/magazin' element={<Shop/>}/>
          </Routes>
        </BrowserRouter>
    );
  }
}

export default App