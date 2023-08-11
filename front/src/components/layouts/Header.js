import React from "react"
import '../../styles/Header.css'


const Header = (props) => {
    return(
    <header>
        <div className="holder">
            <img src="images/logo-temporal.jpg" alt="logo"></img>
            <h1>Emprende Stock</h1>
        </div>
    </header>
    )
}

export default Header;