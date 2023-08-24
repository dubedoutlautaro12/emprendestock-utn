import React from "react"
import { Link } from "react-router-dom"
import "../../styles/Nav.css"

const Nav = (props) => {
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/articulos">articulos</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav