import {usersAPI} from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS'

let initialState = {
    users: [],
    pageSize: 16,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) return {...user, followed: true}
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) return {...user, followed: false}
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
                currentPage: state.currentPage + 1
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (userId, inProgress) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    inProgress,
    userId
})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(userId, true))
    usersAPI.follow(userId).then(response => {
        dispatch(toggleFollowingProgress(userId, false))
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
    })
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(userId, true))
    usersAPI.unfollow(userId).then(response => {
        dispatch(toggleFollowingProgress(userId, false))
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
    })
}

export default usersReducer
