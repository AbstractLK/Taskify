import React from 'react'
import Logo from "../assets/logo.png"

export const Header = () => {
  return (
    <header>
        <div className='logo'>
        	<img src={Logo} alt='logo' />
        	<span>Taskify</span>
        </div>
    </header>
  )
}
