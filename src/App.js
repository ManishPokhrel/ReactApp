import React from 'react';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import Services from './Components/Services/Services';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Contact from './Components/Contact/Contact';

function App(){
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/About' element={<About/>} />
            <Route exact path='/Services' element={<Services />}/>
            <Route exact path='/Contact' element={<Contact />}/>
      
          </Routes>
          <Footer />
        </Router>
        
      </>
    );
    }

export default App;