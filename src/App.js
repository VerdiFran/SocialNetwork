import React from 'react'
import './App.scss'
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import {Route} from "react-router-dom"
import News from "./components/News/News"
import Settings from "./components/Settings/Settings"
import Music from "./components/Music/Music"
import DialogsContainer from "./components/Dialogs/DialogsContainer"

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route
                    path='/profile'
                    render={() => <Profile />}
                />
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer />}
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
        </div>
    )
}

export default App
