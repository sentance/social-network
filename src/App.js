import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/NavBar'
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
    <div className='app-wrapper '>
      <Header/>
    
      <Navbar state={props.state.frindavatar}/>
      <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ ()=> <Dialogs 
                                                state={props.state.messagePage}
                                                
                                                
                                                /> }/>
          <Route path='/profile' render={ ()=> <Profile 
                                                state={props.state.profilePage}
                                                dispatch={props.dispatch}
                                                newPostText={props.state.profilePage.newPostText}
                                                /> }/>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
