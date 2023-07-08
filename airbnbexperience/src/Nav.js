import React from "react"
import logo from './public/images/airbnb 1.svg';
export default function Nav(){
    return (
        <nav className = "App">
           <img src = {logo} className = "App-logo" alt = "logo" />
        </nav>
    )
}