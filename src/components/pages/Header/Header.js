import React from 'react'
import './Header.css'

function Header(){
    return (
        <div className='header'>
            <div className='home'>
                <button className='homeTitle'>Realworld Blog</button>
            </div>
            <div className='buttonsHead'>
                <button className='signIn headButton'>Sign In</button>
                <button className='signUp headButton'>Sign Up</button>
            </div>
        </div>
    )
}

export default Header;
