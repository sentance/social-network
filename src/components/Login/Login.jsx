import React from 'react';
import {reduxForm, Field} from 'redux-form'
import {authMe} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Input } from '../common/FormControls/FormControls';
import { maxLengthCreator, minLengthCreator, required } from '../utils/validators/validators';

const maxLengthCreator10 = maxLengthCreator(10);
const minLengthCreator3 = minLengthCreator(3);

const LoginForm =(props)=>{
    return (
    <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={'login'} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field  placeholder={'Password'} validate={[required]} name={'password'} component={Input}/>
            </div>
            <div>
                <Field  type={'checkbox'} name={'rememberMe'} placeholder={'Save'} component={'input'}/>
            </div>
            <div>
               <button>Login</button>
            </div>
    </form>
        )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onFormSubmit = (formData) =>{
        props.authMe(formData.login, formData.password);
       
        // <Redirect to="/profile" />
        
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
    }
}

export default compose(connect (mapStateToProps, 
    {authMe}),
     withRouter
    //   withAuthRedirect
    )(Login)
