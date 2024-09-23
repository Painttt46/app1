import React from "react";
import{BrowserRouter,NavLink,Route,Routes} from 'react-router-dom'
import './navlink.css';
import Products from "./product";
import'./product.css';
import member from "./member";
import Home from "./home";

export default function Router3(){
    return(
        <BrowserRouter>
            <nav className="nav">
                <NavLink to = '/' 
                className={({isActive})=>isActive?"active_menu":"menu"} 
                style={({isActive})=>{return{fontWeight:isActive?"bold":""};}}
                >
                    Home
                </NavLink>
                <NavLink to='/products' className={({isActive})=>isActive?"active_menu":"menu"}>Products</NavLink>

                <NavLink to='/member' className={({isActive})=>isActive?"active_menu":"menu"}>Member</NavLink>

                <NavLink to='/contact' className={({isActive})=>isActive?"active_menu":"menu"}>Contact Us</NavLink>
            </nav>
            <Routes style={{margin:'20px'}}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/member" Component={member}></Route>
                <Route path="/contact" element={<div style={{textAlign:"center"}}>Contact Page</div>}></Route>
                <Route path="/*" element={<div style={{textAlign:"center"}}>Error 404 Not Found</div>}></Route>
                
            </Routes>

        </BrowserRouter>
    )

}