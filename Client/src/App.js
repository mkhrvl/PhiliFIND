import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './components/pages/Home';
import FoundForm from './components/pages/FoundForm';
import LostForm from './components/pages/LostForm';
import Posts from './components/pages/Posts';
import Admin from './components/pages/Admin';

//dependencies for Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='app-container'>
        <Navbar />
        <Router>
          {/* Links to Pages */}
          <Routes>
            {/* Redirects to Home Page when visiting the site */}
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/found' element={<FoundForm />} />
            <Route path='/lost' element={<LostForm />} />
            <Route path='/post' element={<Posts />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
