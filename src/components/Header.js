import React from 'react'
import Logo from "../assets/logo.png"

export const Header = () => {
  return (
    <header>
        <div className='logo'>
        	<img src={Logo} alt='logo' />
        	<span>Taskify</span>
        </div>
        <div className="themeSelector">
            <span className='light'></span>
            <span className='gray'></span>
            <span className='dark'></span>
        </div>
    </header>
  )
}
