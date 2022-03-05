import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './components/Navbar/NavItems/About';
import Service from './components/Navbar/NavItems/Service'
import Contact from './components/Navbar/NavItems/Contact';
function App() {
  return (
    
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/about'element={<About/>}/>
          <Route path='/service'element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
     
  );
}
export default App;
