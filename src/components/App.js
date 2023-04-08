import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Pagenotfound from "./Pagenotfound";
import Login from "./Login";
import Cart from "./Cart";
import Addcategory from "./Addcategory";
import Showcategory from "../Showcategory";
// import Productdetail from "./Productdetail";
import Productdetail from "./Productdetail";
import Main from "./Main";
import Parentc from "./Parentc";
import DeleteProduct from "./DeleteProduct";

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Hook1 from "./Hook1";
import Hook2 from "./Hook2";
import Hook3 from "./Hook3";
import Hook4 from "./Hook4";
import Show from "./Show";
import Add from "./Add";
import Editproduct from "./Editproduct";

 
function App(){
    return(
        <BrowserRouter>
            <Header/>
             <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cartpage" element={<Cart />}/>
                    <Route path="/loginpage" element={<Login />}/>
                    <Route path="/parent-child" element={<Main />}/>
                    <Route path="/parentcomp" element={<Parentc />}/>
                    <Route path="/hook1" element={<Hook1 />}/>
                    <Route path="/hook2" element={<Hook2 />}/>
                    <Route path="/hook3" element={<Hook3 />}/>
                    <Route path="/hook4" element={<Hook4 />}/>
                    <Route path="/showproduct" element={<Show />}/>
                    <Route path="/addData" element={<Add />}/>
                    <Route path="/single-product/:productId" element={<Productdetail />}/>
                    <Route path="/category/add" element={<Addcategory />}/>
                    <Route path="/category/show" element={<Showcategory />}/>
                    <Route path="/singlepage/:productId" element={<Productdetail />}/>
                    <Route path="/deletepro/:productId" element={<DeleteProduct />}/>
                    <Route path="/editpro/:productId" element={<Editproduct />}/>


                    <Route path="/*" element={<Pagenotfound />}/>
                    
             </Routes>

             <Footer/>
        </BrowserRouter>

    )
}
export default App;
