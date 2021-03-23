import React from 'react';
import classes from './Dialogs.module.css';
import {Formik} from 'formik'
import {Form, Input, SubmitButton} from 'formik-antd'
import {Col, Row, Space} from "antd";


const Dialog = (props) => {

    let state = props.dialogsPage;
let messages = state.messages.map(message => {
        return (
            <div key={message.id} className={classes.user + ' ' + classes.remote}>
                <div className={classes.avatar}>
                    <div className={classes.pic}>
                        <img src="https://picsum.photos/100/100/?random=1"/>
                    </div>
                    <div className={classes.name}>Albee</div>
                </div>
                <div className={classes.txt}>
                    {message.message}
                </div>
            </div>
        )
    })
    let onSendMessageClick = (value) => {
        props.sendMessage(value.newMessageBody)
    }
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogue}>
                {messages}
                <MessageForm onSubmit={onSendMessageClick}/>

            </div>
        </div>
    )
}

const MessageForm = ({onSubmit, isSubmitting}) => {

    return (
        <Formik
            initialValues={{
                newPostElement: ''
            }}

            onSubmit={(values, actions) => {
                onSubmit(values)
                actions.setSubmitting(false)
                actions.resetForm({
                    values: {
                        newPostElement: '',

                    }
                });
            }}
        >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <Form onSubmit={handleSubmit}>

                    <Row>

                        <Col span={17}>
                            <Space direction="vertical">

                                <div>
                                    <Input.TextArea style={{width: 600}} rows={4} placeholder={'Message'}
                                                    name={'newMessageBody'} component='textarea'/>
                                </div>

                                <div>
                                    <SubmitButton type={"primary"}>Send message</SubmitButton>
                                </div>
                            </Space>

                        </Col>

                    </Row>

                </Form>
            )}
        </Formik>

    )
}


export default Dialog;