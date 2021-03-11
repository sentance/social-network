import profileReducer, { addPostActionCreator, delePost } from "./profile-reducer";

import React from 'react';


it('length post should me incremented', ()=>{
    // 1. test data
    let action = addPostActionCreator('Tes post ')
    let initialState = {
        postData: [
            {id: 1, text: 'Helodslodl', likeCount: 23, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
            {id: 2, text: 'UkIdslld s d', likeCount: 21, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
            {id: 3, text: 'Hsdu asdiasdl', likeCount: 2, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'}
          ],
          newPostText: 'It-magic, bro - ?',
          frindavatar: [
            {id: 1,friendpic: 'https://picsum.photos/100/100/?random=1'},
            {id: 2,friendpic: 'https://picsum.photos/100/100/?random=4'},
            {id: 3,friendpic: 'https://picsum.photos/100/100/?random=50'}
        ],
        isFetching: false,
        userProfile: null
    }
    // 2. action
    let newState = profileReducer(initialState, action);

    // 3. expectation 
    expect(newState.postData.length).toBe(4)
    expect(newState.postData[3].text).toBe('Tes post ')
})
it('post should be', ()=>{
    // 1. test data
    let action = addPostActionCreator('Tes post ')
    let initialState = {
        postData: [
            {id: 1, text: 'Helodslodl', likeCount: 23, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
            {id: 2, text: 'UkIdslld s d', likeCount: 21, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
            {id: 3, text: 'Hsdu asdiasdl', likeCount: 2, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'}
          ],
          newPostText: 'It-magic, bro - ?',
          frindavatar: [
            {id: 1,friendpic: 'https://picsum.photos/100/100/?random=1'},
            {id: 2,friendpic: 'https://picsum.photos/100/100/?random=4'},
            {id: 3,friendpic: 'https://picsum.photos/100/100/?random=50'}
        ],
        isFetching: false,
        userProfile: null
    }
    // 2. action
    let newState = profileReducer(initialState, action);

    // 3. expectation 
    expect(newState.postData[3].text).toBe('Tes post ')
})
it('after deleting length of messages should be decrement', ()=>{
    // 1. test data
    let action = delePost(1)
    let initialState = {
        postData: [
            {id: 1, text: 'Helodslodl', likeCount: 23, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
            {id: 2, text: 'UkIdslld s d', likeCount: 21, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
            {id: 3, text: 'Hsdu asdiasdl', likeCount: 2, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'}
          ],
          newPostText: 'It-magic, bro - ?',
          frindavatar: [
            {id: 1,friendpic: 'https://picsum.photos/100/100/?random=1'},
            {id: 2,friendpic: 'https://picsum.photos/100/100/?random=4'},
            {id: 3,friendpic: 'https://picsum.photos/100/100/?random=50'}
        ],
        isFetching: false,
        userProfile: null
    }
    // 2. action
    let newState = profileReducer(initialState, action);

    // 3. expectation 
    expect(newState.postData.length).toBe(2)
})
