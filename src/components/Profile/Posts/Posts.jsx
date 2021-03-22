import React from 'react';
import classes from './Posts.module.css';
import OnePost from './OnePost/OnePost';
import {Formik, Field} from 'formik'


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
        
        >{({values, errors, touched, handleSubmit, handleReset})=>(
            <form onSubmit={handleSubmit}>
            <Field placeholder={'Message'} name={'newPostElement'} component={'textarea'} ></Field>
            <button >Send post</button>
            </form>
        )}
       
        </Formik>
    )
}


export default Post;