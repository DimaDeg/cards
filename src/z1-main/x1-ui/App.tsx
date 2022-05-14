import React from 'react';
import './App.css';
import {Header} from "./v1-header/Header";
import {Main} from "./v3-main-page/MainPage";
import {HashRouter} from "react-router-dom";

const App = () => (
    <div>
        <HashRouter>
            <Header/>
            <Main/>
        </HashRouter>
    </div>
);

export default App;
