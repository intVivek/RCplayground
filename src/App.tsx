import './App.css';
import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Playground from './Pages/Playground';
import store from "./Store";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Playground />}/>
                    <Route path="*" element={<Playground />}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;