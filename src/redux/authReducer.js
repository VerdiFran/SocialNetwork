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

export default authReducer
