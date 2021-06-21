import React from 'react'
import { Link } from 'react-router-dom'



function NavigationMenu(props) {
    
    return (
        <div>
            <ul>
                <li>
                    <Link
                        to="/"
                        className="text-green-600 font-bold"
                        onClick={props.closeMenu}>
                        Home Page
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="text-green-600 font-bold"
                        onClick={props.closeMenu}>
                        About Page
                    </Link>
                </li>
                <li>
                    <Link
                        to="/components"
                        className="text-green-600 font-bold"
                        onClick={props.closeMenu}>
                        Other Components
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu
