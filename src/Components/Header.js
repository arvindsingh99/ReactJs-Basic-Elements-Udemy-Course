import React from 'react'
import Navigation from './Navigation';
function Header() {
    return (
        <div className="border-b font-bold p-3 flex justify-between items-center">
        <span className="font-bold">
            App Header
            </span>
            <Navigation />
        </div>
    )
}

export default Header;