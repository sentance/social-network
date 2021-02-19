import {authAPI} from '../api/api';;
const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}



const autReducer = (state = initialState, action)=>{
    
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true

            };
      
       
        default:
            return state;
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
        .then(response=>{
            let isAuth = response.data.resultCode;
            let {id, login, email} = response.data.data;
            
            if (isAuth === 0){
                dispatch(setAuthUserData(id, email, login))
            }
            
        })
    }
}

export const setAuthUserData = (id, email, login)=>(
    {
    type: SET_USER_DATA,
    data: {id, email, login}
    })



export default autReducer;