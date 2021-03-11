import userAPI, {profileAPI} from '../api/api';;

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE ='SET-USER-PROFILE';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const LIKE_POST = 'LIKE_POST';


let initialState = {
    postData: [
        {id: 1, text: 'First post', likeCount: 23, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
        {id: 2, text: 'Another post', likeCount: 21, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
        {id: 3, text: 'Third post', likeCount: 2, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'}
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
    userProfile: null,
    status: ''
}

const profileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 19,
                text: action.newPostElement,
                likeCount: 0,
                img: 'https://picsum.photos/100/100/?random=67'
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''

            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            } 
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(post => post.id !== action.postId)
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case LIKE_POST:
            debugger
            return {
                ...state,
                postData: [...state.postData, state.postData.likeCount+1]
            }
        default:
                return state;
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) =>  {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.setStatus(status)
    if(response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
}

export const setStatus = (status) => ({type: SET_STATUS, status })

export const addPostActionCreator =(newPostElement)=> ({
    type: ADD_POST,
    newPostElement
 })

 export const setUserProfile = (profile) => ( {
   type: SET_USER_PROFILE, 
   profile
 })
 export const delePost = (postId) => ( {
   type: DELETE_POST, 
   postId
 })
 export const likePost = () => ( {
   type: LIKE_POST
 })


 export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FATCHING, isFetching})


export default profileReducer;