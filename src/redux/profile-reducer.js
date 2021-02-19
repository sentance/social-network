import userAPI from '../api/api';;

const  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE ='SET-USER-PROFILE';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';


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
    isFetching: false,
    userProfile: null
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
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''

            }
            
        case UPDATE_NEW_POST_TEXT:
            return { 
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            } 

        default:
                return state;
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId)
        // axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        .then(response=>{
            dispatch(setUserProfile(response.data))
        })
    }
}

export const addPostActionCreator =()=> ({
    type: ADD_POST
 })

 export const updateNewPostTextActionCreator = (text) => ( {
   type: UPDATE_NEW_POST_TEXT, 
   newText: text
 })
 export const setUserProfile = (profile) => ( {
   type: SET_USER_PROFILE, 
   profile
 })

 export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FATCHING, isFetching})


export default profileReducer;