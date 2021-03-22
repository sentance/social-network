import React from 'react';
import {Formik, Field, Form} from 'formik'
import {login} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Redirect, withRouter} from 'react-router-dom';
import classes from '../common/FormControls/FormControl.module.css';


const LoginForm = (props) => {
    return (
        <div>

            <Formik
                initialValues={{
                    login: ''
                }}
                onSubmit={(values) => {
                    props.onFormSubmit(values)
                }}

                validate={values => {
                    const errors = {}
                    if (!values.login) {
                        errors.email = 'Required'
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                }}

            >
                {({errors, touched, handleSubmit}) => (

                    <Form onSubmit={handleSubmit}>
                        {props.errorMessage && <div>{props.errorMessag}e</div>}
                       <div><Field name="login" component="input" type="email" placeholder="Login"/></div>

                        {errors.email && touched.email ? <div>{errors.email}</div> : null}

                        <div> <Field name="password" component="input" type="password" placeholder="Password"/></div>
                       <div><Field name="rememberMe" component="input" type="checkbox" placeholder="Save"/>Save</div>
                        {props.captchaUrl && <img src={props.captchaUrl} alt={'captcha'}/>}
                        <div> <Field name="captcha" component="input" type="text" placeholder="captcha"/></div>
                        <div>
                            <button type={'submit'}>Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


const Login = (props) => {
    const onFormSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div>
            <h1>Login Page</h1>
            <LoginForm onFormSubmit={onFormSubmit} errorMessage={props.errorMessage} captchaUrl={props.captchaUrl}/>
        </div>
    )
}


let mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage,
        captchaUrl: state.auth.captchaUrl
    }
}


export default compose(connect(mapStateToProps,
    {login}),
    withRouter
    //   withAuthRedirect
)(Login)