import userAPI from '../api/api';;


const FOLLOW = 'FOLLOW';
const UNFLLOW = 'UNFLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    
    users: [],
    pageSize: 15,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}



const UsersReducer = (state = initialState, action)=>{
    
    switch (action.type) {
        
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users=>{
                    if(users.id === action.userId){
                        return {...users, followed: true}
                    }
                    return users;
                })

            };
            
        case UNFLLOW:
            return {
                ...state,
                users: state.users.map(user=>{
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                })

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


export const getUsers = (currentPage, pageSize)=> {
 return (dispatch) => {
    dispatch(toggleIsFetching(true))
    userAPI.getUsers(currentPage, pageSize)
    .then(data=>{
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersCount(data.totalCount));
            
    })
}
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.unfolowUser(userId)
        .then(data=>{
              if(data.resultCode === 0){
                dispatch(unfollowSuccess(userId))
              }
              dispatch(toggleFollowingProgress(false, userId))
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        
        dispatch(toggleFollowingProgress(true, userId))
            userAPI.followUser(userId)
            .then(data=>{
                    if(data.resultCode === 0){
                    dispatch(followSuccess(userId))
                    }
                    dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


export const followSuccess = (userId)=>({ type: FOLLOW, userId})
export const unfollowSuccess = (userId)=>({ type: UNFLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersCount = (usersCount) => ({type: SET_TOTAL_COUNT, usersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FATCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export default UsersReducer;