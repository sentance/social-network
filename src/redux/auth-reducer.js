import {authAPI} from '../api/api';

;
const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    password: null,
    isFetching: false,
    isAuth: false,
    errorMessage: null,
    captchaUrl: null
}


const autReducer = (state = initialState, action) => {

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

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    let isAuth = response.data.resultCode;
    let {id, login, email} = response.data.data;
    if (isAuth === 0) {
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    let isAuth = response.resultCode;

    if (isAuth === 0) {
        dispatch(getAuthUserData())

    } else if (isAuth === 1) {
        let errorMessage = response.messages[0]
        dispatch(setAuthUserData(null, null, null, null, errorMessage))

    } else if (isAuth === 10) {
        let captchaUrl = dispatch(getcaptchaUrl());
        let errorMessage = response.messages[0]
        dispatch(setAuthUserData(null, null, null, null, errorMessage, captchaUrl))

    }
}

export const getcaptchaUrl = () => async (dispatch) => {
    let captchaUrl = await authAPI.getCaptcha();
    let url = captchaUrl.data['url'];
    dispatch(setAuthUserData(null, null, null, null, null, url))
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

// export const setLogout = () => ({
//     type: LOG_OUT
// })
export const setAuthUserData = (id, email, login, isAuth, errorMessage, captchaUrl) => (

    {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth, errorMessage, captchaUrl}
    })


export default autReducer;