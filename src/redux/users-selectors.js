export const getUsers = (state) =>{
    return state.users.users
}

export const getPageSize = (state) => {
    return state.users.pageSize
}
export const gettotalUsersCount = (state) => {
    return state.users.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.users.currentPage
}
export const getIsFetching = (state) => {
    return state.users.isFetching
}
export const getFollowingIsProgress = (state) => {
    return state.users.followingInProgress
}