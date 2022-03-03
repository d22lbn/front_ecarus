import React from "react";


import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import HeaderAuthorized from "./components/header/HeaderAuthorized";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div>
                <HeaderAuthorized auth={true}/>

                <Routes>
                    <Route path={'/main'} element={<Main />} />
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
