import React from 'react';
import {reduxForm, Field} from 'redux-form'
import {login} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Input } from '../common/FormControls/FormControls';
import {required} from '../utils/validators/validators';
import classes from '../common/FormControls/FormControl.module.css';


const LoginForm =(props)=>{
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={'login'} validate={[required]} component={Input}/>
        </div>
        <div>
            <Field type={'password'} placeholder={'Password'} validate={[required]} name={'password'} component={Input}/>
        </div>
        <div>
            <Field  type={'checkbox'} name={'rememberMe'} placeholder={'Save'} component={'input'}/>
        </div>
        {props.error && <div className={classes.formSummaryError}>
            {props.error}
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
