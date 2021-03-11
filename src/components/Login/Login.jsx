import React from 'react';
import {reduxForm} from 'redux-form'
import {login} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';
import { createField, Input } from '../common/FormControls/FormControls';
import {required} from '../utils/validators/validators';
import classes from '../common/FormControls/FormControl.module.css';


const LoginForm =({handleSubmit, error})=>{
    return (
    <form onSubmit={handleSubmit}>
            {createField('Login', 'login', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField('rememberMe', 'Save', null, Input, {type: 'checkbox'}, 'remember me')}
     
        
        {error && <div className={classes.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
        )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onFormSubmit = (formData) =>{
        props.login(formData.login, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div>
        <h1>Login Page</h1>
        <LoginReduxForm onSubmit={onFormSubmit}/>
        </div>
    )
}


let mapStateToProps = (state)=>{
    return {
      isAuth: state.auth.isAuth
    }
}

export default compose(connect (mapStateToProps, 
    {login}),
     withRouter
    //   withAuthRedirect
    )(Login)
