import React, {Component} from 'react';
import Sidebar from './Sidebar/Sidebar';
import './App.css';
import Schedule from './Schedule/Schedule';
import Timetable from './Timetable/Timetable';

const App = () => {
  return(
    <div className='app-wrapper'>
      <div>
        <Sidebar/>
      </div>
      <div>
        <Schedule/>
      </div>
    </div>
  );
}

export default App;