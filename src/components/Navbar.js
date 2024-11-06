import React from 'react'
import './css/navbar.css'
function Navbar() {
  return (
    <div className='container'>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Fixed top</a>
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
            </ul>
            </div>
            </nav>
    </div>
  )
}

export default Navbar