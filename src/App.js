import React from 'react';
import './App.css';
import Header from './components/Header'
import Profile from './components/Profile'
import Navbar from "./components/Navbar"

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
};

export default App;

