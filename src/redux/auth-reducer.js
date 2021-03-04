import {stopSubmit} from 'redux-form';
import {authAPI} from '../api/api';;
const SET_USER_DATA = 'SET_USER_DATA';



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
                ...action.payload
            }
        default:
            return state;
    }
}

export const getAuthUserData = () => (dispatch) => {
      return ( authAPI.me()
        .then(response=>{
            let isAuth = response.data.resultCode;
            let {id, login, email} = response.data.data;
            if (isAuth === 0){
                dispatch(setAuthUserData(id, email, login, true))
            }
            
        }))
}

export const login = (email, password, rememberMe) => {
    return (dispatch)=> {
        authAPI.login(email, password, rememberMe)
        .then(response=>{
            let isAuth = response.resultCode;
            if (isAuth === 0) {
                dispatch(getAuthUserData())
                
            }else {
                let message = response.data.messages > 0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}
export const logout = () => {
    return (dispatch)=> {
        authAPI.logout()
        .then(response=>{
            dispatch(setAuthUserData(null, null, null, false))
        })
    }
}
// export const setLogout = () => ({
//     type: LOG_OUT
// })
export const setAuthUserData = (id, email, login, isAuth)=>(
    {
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
    })



export default autReducer;