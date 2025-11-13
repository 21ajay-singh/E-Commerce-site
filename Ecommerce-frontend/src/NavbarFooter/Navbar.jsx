import { NavLink,Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";
const Navbar=({ inputRef,focusRef})=>{
    
    
    const activeness=async()=>{
    //     const [status,setStatus]=useState()
    // const res = await fetch("http://localhost:8080");
    // if (!res.ok) {
    //   throw new Error("❌ Server error during login.");
    // }
    // const data=await res.json();
    // setStatus(data.user);
    // console.log(status)
    // return status;
    }
    
    if(activeness().accountStatus ===true)
        {
    return(
       <header>
            <Link to="/" className="logo">
            MS <span style={{ color: "#42a5f5" }}>Shop</span>
            </Link>

            <nav>
                <NavLink to="/"> Home</NavLink>
                <NavLink to="/shop"> Shop</NavLink>
                <NavLink to="/offers"> Offers</NavLink>
                <NavLink to="/about"> About Us</NavLink>
                <NavLink to="/contact"> Contact</NavLink>
            </nav>
            <div>
            <input ref={inputRef} style={{marginLeft:'100px'}} type="text"placeholder="Search..."/>
            <button onClick={focusRef} style={{color:'black'}}>🗨️</button>
            </div>
            <div>
            <NavLink style={{marginLeft:'50px'}} to="/cart">🛒</NavLink>
            <NavLink style={{marginLeft:'50px'}} to="/profile"><img src="images/profileLogo.png" alt="profile" className="profile-logo" /></NavLink>
            </div>
        </header>
        )}

       else{
            return(
             <header>
            <Link to="/" className="logo">
            MS <span style={{ color: "#42a5f5" }}>Shop</span>
            </Link>

            <nav>
                <NavLink to="/"> Home</NavLink>
                <NavLink to="/shop"> Shop</NavLink>
                <NavLink to="/offers"> Offers</NavLink>
                <NavLink to="/about"> About Us</NavLink>
                <NavLink to="/contact"> Contact</NavLink>
            </nav>
            <div>
            <input ref={inputRef} style={{marginLeft:'100px'}} type="text"placeholder="Search..."/>
            <button onClick={focusRef} style={{color:'black'}}>🗨️</button>
            </div>
            <div>
            <NavLink style={{marginLeft:'50px'}} to="/cart">🛒</NavLink>
            <div>
            <NavLink style={{marginLeft:'50px'}} to="/login">Login</NavLink>
            <h4>/</h4>
            <NavLink to="/signup">Signup</NavLink>
            </div>
            </div>
        </header>)
       }
}

export default Navbar;