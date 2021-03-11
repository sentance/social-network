import React from 'react';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import Navbar from './components/Navbar/NavBar'
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login'
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Loader from './components/Loader/Loader';
class App extends React.Component {
      componentDidMount(){
        this.props.initializeApp()
    }
  render(){
    if(!this.props.initialized) {
      return <Loader/>
    }else
    return (
     
      <div className='app-wrapper '>
        <HeaderContainer/>
      
        <Navbar/>
        <div className='app-wrapper-content'>
            <Route path='/dialogs' render={ ()=> <DialogsContainer /> }/>
            <Route path='/profile/:userId?' render={ ()=> <ProfileContainer /> }/>
            <Route path='/users' render={ ()=> <UsersContainer /> }/>
            <Route path='/login' render={ ()=> <LoginPage /> }/>
        </div>
      </div>

    );
  }

}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
  
  
}

export default compose(withRouter,connect(mapStateToProps, {initializeApp}))(App)
