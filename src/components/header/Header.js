import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const headstyle = {
        background: '#333',
       color: '#fff',
         textAlign: 'center',
         padding: '10px',
    
     }

     const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        textAlign: 'center'
    }
    return (
        <div>
            <header style={headstyle}>
                <h1>Events</h1>
                <Link style={linkStyle} to="/">Events</Link> | < Link style={linkStyle} to="/about">About</Link>
            </header>

        </div>

        
    )


    
    
}

export default Header


    
