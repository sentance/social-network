import {authAPI} from '../api/api';;
const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN = 'LOGIN';


let initialState = {
    id: null,
    email: null,
    login: null,
    password: null,
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

            }

       
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
export const authMe = (email, password) => {
    return (dispatch)=> {
        authAPI.login(email, password)
        .then(response=>{
            let isAuth = response.resultCode;
            
            if (isAuth === 0) {
                dispatch(setAuthUserData(getAuthUserData()))
                
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