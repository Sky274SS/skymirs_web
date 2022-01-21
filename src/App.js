import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar config={props.config.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={
                            <Profile
                                config={props.config.profile}
                                dispatch={props.dispatch}
                            />
                        }/>
                        <Route path='/dialogs/*' element={
                            <Dialogs
                                config={props.config.dialogs}
                                dispatch={props.dispatch}
                            />
                        }/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
