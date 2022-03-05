import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './components/Navbar/NavItems/About';
import Service from './components/Navbar/NavItems/Service'

function App() {
  return (
    
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/about'element={<About/>}/>
          <Route path='/service'element={<Service/>}/>
        </Routes>
    </Router>
     
  );
}
export default App;
