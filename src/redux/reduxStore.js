import {applyMiddleware, combineReducers, createStore} from "redux"
import dialogsReducer from "./reducers/dialogsReducer"
import profileReducer from "./reducers/profileReducer"
import usersReducer from "./reducers/usersReducer"
import authReducer from "./reducers/authReducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from './reducers/appReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
