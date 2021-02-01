const  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

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
        {id: 3,friendpic: 'https://picsum.photos/100/100/?random=50'},
        {id: 4,friendpic: 'https://picsum.photos/100/100/?random=50'},
        {id: 5,friendpic: 'https://picsum.photos/100/100/?random=70'},
        {id: 6,friendpic: 'https://picsum.photos/100/100/?random=90'},
        {id: 7,friendpic: 'https://picsum.photos/100/100/?random=10'},
        {id: 9,friendpic: 'https://picsum.photos/100/100/?random=60'},
    ],
}

const profileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 19,
                text: state.newPostText,
                likeCount: 0,
                img: 'https://picsum.photos/100/100/?random=67'
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
            default:
                return state;
    }
}

export const addPostActionCreator =()=> ({
    type: ADD_POST
 })

 export const updateNewPostTextActionCreator = (text) => ( {
   type: UPDATE_NEW_POST_TEXT, 
   newText: text
 })

export default profileReducer;