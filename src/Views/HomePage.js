import React from 'react'
import HelloWorld from '../Components/HelloWorld'

function HomePage() {
    return (
        <div>
            <HelloWorld name="Arvind"/>
            <h1 className="font-bold text-red-600"> This is the Home page</h1>
        </div>
    )
}

export default HomePage
