import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import Navbar from './components/Navbar/NavBar'
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



function App(props) {
  return (
    <BrowserRouter>
   
    <div className='app-wrapper '>
      <Header/>
    
      <Navbar/>
      <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ ()=> <DialogsContainer /> }/>
          <Route path='/profile/' render={ ()=> <ProfileContainer /> }/>
          <Route path='/users' render={ ()=> <UsersContainer /> }/>
      </div>
      
    </div>

    </BrowserRouter>
  );
}

export default App;
