import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Sidebar_before from './Sidebar/Sidebar-before';
import Sidebar_after from './Sidebar/Sidebar-after';
import Schedule from './Schedule/Schedule';
import Profile from './Profile/Profile.jsx';
import Organisation from './Organisation/Organisation.jsx';
import E_Library from './E-Library/E-Library';
import './App.css';
import BookDetail from './E-Library/BookDetail';
import Login from './Login/Login';
import Register from './Login/Register';
import AuthDetails from './Login/AuthDetails';

const App = () => {
  return(
    <BrowserRouter>
      <div className='app-wrapper'>
        <div className='app-sidebar'>
          <Sidebar_before/>
        </div>
        <div>
          <Routes>
            {/* <Route path='/' element={<Home/>}/> */}
            <Route path='/profile' element={<Profile/>} />
            <Route path='/organisation' element={<Organisation/>} />
            <Route path='/schedule' element={<Schedule/>} />
            <Route exact path='/e_library' element={<E_Library/>} />
            <Route path='/e_library/:id' element={<BookDetail/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/authdetails' element={<AuthDetails/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;