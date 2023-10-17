import React, {useState, useEffect} from 'react';
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
import Logout from './Login/Logout';

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('isSignedIn') === 'true');

    useEffect(() => {
      localStorage.setItem('isSignedIn', isSignedIn);
    }, [isSignedIn]);
  return(
    <BrowserRouter>
      <div className='app-wrapper'>
        <div className='app-sidebar'>
          {isSignedIn ? <Sidebar_after /> : <Sidebar_before />}
        </div>
        <div>
          <Routes>
            {/* <Route path='/' element={<Home/>}/> */}
            <Route path='/profile' element={<Profile/>} />
            <Route path='/organisation' element={<Organisation onSignIn={() => setIsSignedIn(true)}/>} />
            <Route path='/schedule' element={<Schedule onSignIn={() => setIsSignedIn(true)}/>} />
            <Route exact path='/e_library' element={<E_Library onSignIn={() => setIsSignedIn(true)}/>} />
            <Route path='/e_library/:id' element={<BookDetail onSignIn={() => setIsSignedIn(true)}/>} />
            <Route path='/login' element={<Login onSignIn={() => setIsSignedIn(true)} />} />
            <Route path='/logout' element={<Logout/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/authdetails' element={<AuthDetails/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;