import React from "react";
import Footer from "./components/footer/Footer";
import Main from "./components/pages/main/Main";
import HeaderAuthorized from "./components/header/HeaderAuthorized";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CollectionPoints from "./components/pages/collectionPoints/CollectionPoints";
import EcoMarket from "./components/pages/ecoMarket/EcoMarket";
import Service from "./components/pages/service/Service";
import Login from "./components/authorization/Login";
import {Formik, Form} from "formik";
import {TextField} from "./TextField";
import Lk from "./components/pages/lk/Lk";


function App() {
    return (
        <BrowserRouter>
            <div>
                <HeaderAuthorized auth={true}/>

                {/*<Login/>*/}

                {/*<Formik*/}
                {/*    initialValues={{*/}
                {/*        email: ''*/}
                {/*    }}*/}
                {/*>*/}
                {/*    {formik => (*/}
                {/*         <div>*/}
                {/*             /!*{console.log(formik.values)}*!/*/}
                {/*             <Form>*/}
                {/*                 <TextField label="Email" name="email" type="email"/>*/}
                {/*                 <button type="submit">Register</button>*/}
                {/*                 <button type="reset">Reset</button>*/}
                {/*             </Form>*/}
                {/*         </div>*/}
                {/*     )}*/}
                {/* </Formik>*/}

                <Routes>
                    <Route path={'/main'} element={<Main/>}/>
                    <Route path={'/collection-points'} element={<CollectionPoints/>}/>
                    <Route path={'/eco-market'} element={<EcoMarket/>}/>
                    <Route path={'/service'} element={<Service/>}/>
                    <Route path={'/lk'} element={<Lk/>}/>
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
