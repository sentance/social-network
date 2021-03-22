import React from 'react';
import {Formik, Field} from 'formik';
// import { createField, Input, Textarea} from '../../common/FormControls/FormControls';

const ProfileDataForm = (props) => {
    const {onSubmit, userProfile} = props
    return (
        <Formik
            initialValues={{
                ...userProfile
            }}
            onSubmit={(values) => {
                onSubmit(values)
            }}>

            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <button type="submit" disabled={isSubmitting}>save</button>
                        <div><b><Field name="fullName" type="text" placeholder="Full Name"/></b></div>
                        <div><b>Looking for a job:</b> <Field name="lookingForaJob" type="checkbox"
                                                              placeholder="Looking For a Job"/></div>
                        <div><b>Skills:</b> <Field name="lookingForAJobDescription" type="textarea"
                                                        placeholder="Skils"/></div>

                        <div><b>About Me:</b> <Field name="aboutMe" type="textarea" placeholder="About Me"/></div>
                        <div><b>Contacts:</b> {Object.keys(props.userProfile.contacts).map(key => {
                            return <div>
                                <b>{key}:<Field key={key} name={'contacts.' + key} type="input" placeholder={key}/></b>
                            </div>
                        })} </div>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default ProfileDataForm;