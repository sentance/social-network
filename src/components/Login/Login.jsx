import React from 'react';
import {Formik} from 'formik'
import {login} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Redirect, withRouter} from 'react-router-dom';
import {Form, Input, Checkbox, SubmitButton} from 'formik-antd'
import {Col, Row, Space} from "antd";


const LoginForm = (props) => {
    return (
        <Row>
            <Col span={10}>
                <Formik

                    initialValues={{
                        login: ''
                    }}

                    onSubmit={(values, actions) => {
                        props.onFormSubmit(values)
                        actions.setSubmitting(false);
                        actions.resetForm({
                            values: {
                                // the type of `values` inferred to be Blog
                                email: '',
                                password: '',
                                captcha: '',
                            }
                        })
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


                    {({errors, isValidating, isSubmitting, touched, dirty, handleSubmit, handleReset}) => (

                        <Form onSubmit={handleSubmit} onReset={handleReset}>
                            <Space size={[8, 4]} direction="vertical" wrap>
                                {props.errorMessage &&
                                <div style={{color: 'red'}}>{props.errorMessage}
                                </div>}

                                <div>

                                    <Input name='login' placeholder='Login' type="email"/>

                                </div>

                                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                                <div>
                                    <Input name="password" component="input" type="password" placeholder="Password"/>
                                </div>
                                <div><Checkbox name="rememberMe" component="input" type="checkbox" placeholder="Save"/>Save
                                </div>
                                {props.captchaUrl && <img src={props.captchaUrl} alt={'captcha'}/>}
                                {props.captchaUrl &&
                                <div><Input name="captcha" component="input" type="text" placeholder="captcha"/></div>}

                                <div>

                                    <SubmitButton isValid={true} type="primary">Login</SubmitButton>

                                </div>
                            </Space>
                        </Form>

                    )}
                </Formik>
            </Col>
        </Row>

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