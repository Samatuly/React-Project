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
import SignIn from './Login/Login';
import SignOut from './Login/Logout';

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
            {/* <Route path="/home" element={<Home />}></Route>
            <Route path="/canteen" element={<Canteen />}></Route>
            <Route path="/ratings" element={<Ratings />}></Route> */}
            <Route path='/profile' element={<Profile/>} />
            <Route path='/organisation' element={<Organisation/>} />
            <Route path='/schedule' element={<Schedule/>} />
            <Route path='/e_library' element={<E_Library/>} />
            <Route path='/e_library/:id' element={<BookDetail/>} />
            <Route path='/signin' element={<SignIn onSignIn={() => setIsSignedIn(true)} />} />
            <Route path='/signout' element={<SignOut onSignOut={() => setIsSignedIn(false)}/>} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;