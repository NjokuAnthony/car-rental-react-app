import React from 'react'
import styles from './Navbar.modules.css'
import {AiOutlineMenu, AiOutlineclose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import logo from '../../images/driveLogo.png'

const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <img src={logo} alt='/' />
        <nav>
            <ul className={styles.menu}>
                <li><a href="/">Learn More</a></li>
                <li><a href="/">Log In</a></li>
                <li><a href="/">Sign Up</a></li>
                <li><AiOutlineSearch/></li>
                <li><AiOutlineUser/></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar