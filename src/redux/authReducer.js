import {authAPI} from "../api/api"

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userInfo,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userInfo) => ({type: SET_USER_DATA, userInfo})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0)
        {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData({id, email, login}))
        }
    })
}

export default authReducer
