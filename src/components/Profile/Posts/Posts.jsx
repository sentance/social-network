import React from 'react';
import classes from './Posts.module.css';
import OnePost from './OnePost/OnePost';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {SubmitButton, Form, Input,} from 'formik-antd'


const Post = React.memo(props =>{
    let onAddPost = (value) =>{
        props.addPost(value.newPostElement);
    }
    
    return (
        
        <div className={classes.myPosts}>
            <dic className={classes.newPost}>
                <PostForm onSubmit={onAddPost}/>
            </dic>
        <div className={classes.allPosts}>
            {props.posts.map(post=>{
                return(<OnePost 
                    text={post.text}
                    img={post.img}
                    key={post}
                    likeCount={post.likeCount}
                />)
            })}
         </div>
        </div>
        
    )
})

const SignupSchema = Yup.object().shape({
    newPostElement: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')

  });

const PostForm = (props)=>{
    const {onSubmit} = props;
    return (
        <Formik
        initialValues={{
            newPostElement: ''
        }}
        onSubmit={(values) => {
            onSubmit(values)
            
        }}
        validationSchema={SignupSchema}
        
        >{({values, errors, touched, handleSubmit, handleReset})=>(
            <Form onSubmit={handleSubmit}>
                <div>
                    <Input.TextArea style={{width: 600}} rows={4} placeholder={'Message'} name={'newPostElement'} component={'textarea'} ></Input.TextArea>
                </div>
            {errors.newPostElement && touched.newPostElement ? <div className={classes.errors}>{errors.newPostElement}</div> : null}
                <div>
                    <SubmitButton type={"primary"}>Send post</SubmitButton>
                </div>
            </Form>
        )}
       
        </Formik>
    )
}


export default Post;