import {updateObjectinArray} from '../components/utils/object-helpers';
import userAPI from '../api/api';


const FOLLOW = 'FOLLOW';
const UNFLLOW = 'UNFLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    
    users: [],
    pageSize: 10,
    totalUsersCount: '',
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) =>  {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    
     if(response.resultCode === 0){
         dispatch(actionCreator(userId))
     }
     dispatch(toggleFollowingProgress(false, userId))

}

const UsersReducer = (state = initialState, action)=>{
    
    switch (action.type) {
        
        case FOLLOW:
            return {
                ...state,
                users: updateObjectinArray(state.users, action.userId, 'id', {followed: true})
            };
            
        case UNFLLOW:
            return {
                ...state,
                users: updateObjectinArray(state.users, action.userId, 'id', {followed: false})
        

            };
        case SET_USERS: 
            return {
                ...state,
                users: [...action.users]
            };
        case SET_CURRENT_PAGE: 
            return {
                ...state, 
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT: 
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case TOGGLE_IS_FATCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
        return {
            ...state,
            followingInProgress: action.isFetching 
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
        }
        default:
            return state;
    }
}


export const requestUsers = (currentPage, pageSize)=> async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersCount(data.totalCount));
}


export const unfollow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, userAPI.unfolowUser.bind(userAPI), unfollowSuccess)

}

export const follow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userAPI), followSuccess)
}



export const followSuccess = (userId)=>({ type: FOLLOW, userId})
export const unfollowSuccess = (userId)=>({ type: UNFLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersCount = (usersCount) => ({type: SET_TOTAL_COUNT, usersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FATCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export default UsersReducer;