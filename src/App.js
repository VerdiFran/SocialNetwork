import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import CurrentUserInfoContainer from './components/CurrentUserInfo/CurrentUserInfoContainer'
import Login from './components/Login/Login'
import {connect, Provider} from 'react-redux'
import {initializeApp} from './redux/reducers/appReducer'
import Preloader from './components/common/Preloader'
import store from './redux/reduxStore'
import {compose} from 'redux'

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route
                        path='/profile/:userId?'
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
                    <Route
                        path='/login'
                        render={() => <Login/>}
                    />
                </div>
                <CurrentUserInfoContainer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)

let MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp
