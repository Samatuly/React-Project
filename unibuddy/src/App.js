import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Schedule from './Schedule/Schedule';
import Profile from './Profile/Profile.jsx';
import Organisation from './Organisation/Organisation.jsx';
import E_Library from './E-Library/E-Library';
import './App.css';
import BookDetail from './E-Library/BookDetail';

const App = () => {
  return(
    <BrowserRouter>
      <div className='app-wrapper'>
        <div className='app-sidebar'>
          <Sidebar/>
        </div>
        <div>
          <Routes>
            {/* <Route path='/' element={<Home/>}/> */}
            <Route path='/profile' element={<Profile/>} />
            <Route path='/organisation' element={<Organisation/>} />
            <Route path='/schedule' element={<Schedule/>} />
            <Route exact path='/e_library' element={<E_Library/>} />
            <Route path='/e_library/:id' element={<BookDetail/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;