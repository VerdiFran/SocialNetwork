import React from 'react'
import './App.scss'
import Navbar from "./components/Navbar/Navbar"
import {Route} from "react-router-dom"
import News from "./components/News/News"
import Settings from "./components/Settings/Settings"
import Music from "./components/Music/Music"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import CurrentUserInfoContainer from "./components/CurrentUserInfo/CurrentUserInfoContainer"

const App = () => {
    return (
        <div className="app-wrapper">
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route
                    path='/profile/:userId'
                    render={() => <ProfileContainer/>}
                />
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer/>}
                />
                <Route
                    path='/users'
                    render={() => <UsersContainer/>}
                />
                <Route
                    path='/news'
                    render={() => <News/>}/>
                <Route
                    path='/settings'
                    render={() => <Settings/>}/>
                <Route
                    path='/music'
                    render={() => <Music/>}/>
            </div>
            <CurrentUserInfoContainer/>
        </div>
    )
}

export default App
