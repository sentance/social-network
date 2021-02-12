const FOLLOW = 'FOLLOW';
const UNFLLOW = 'UNFLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';
let initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false
}



const UsersReducer = (state = initialState, action)=>{
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users=>{
                    if(users.id === action.userId){
                        return {...users, follow: true}
                    }
                    return users;
                })

            };
            
        case UNFLLOW:
            return {
                ...state,
                users: state.users.map(users=>{
                    if(users.id === action.userId){
                        return {...users, follow: false}
                    }
                    return users;
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
        default:
            return state;
    }
}


export const follow= (userId)=>({ type: FOLLOW, userId})
export const unfollow = (userId)=>({ type: UNFLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersCount = (usersCount) => ({type: SET_TOTAL_COUNT, usersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FATCHING, isFetching})
export default UsersReducer;