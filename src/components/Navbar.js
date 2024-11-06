import {React, useState} from 'react'
import './css/navbar.css'
function Navbar() {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };
  return (
    <div className='container'>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">MyDex</a>
            <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavbarCollapsed}   

          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse   
 ${isNavbarCollapsed ? 'show' : ''}`}
          id="navbarNav"
        >











            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Airdop</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Staking</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Dex</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>LaunchPad</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>NFT</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link wallet'>WalletConnect</a>
                </li>
            </ul>
            </div>
           
            </div>
            </nav>
    </div>
  )
}

export default Navbar