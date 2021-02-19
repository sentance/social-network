import {authAPI} from '../api/api';;
const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: true
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
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, email, login))
        })
    }
}

export const setAuthUserData = (id, email, login, isAuth)=>(
    {
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
    })



export default autReducer;