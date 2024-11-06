import React from 'react'
import PurchaseCard from './PurchaseCard'
import './css/hero.css';

function Hero() {
  return (
    
    <div className='container mt-5'>
    
    <div className='row'>
        <div className='col-md-6'>
        <h3 className='herotext'>Welcome To The World Of Web3</h3>
        </div>
        <div className='col-md-2'>
        </div>
        <div className='col-md-4'>
            <PurchaseCard/>
        </div>
    </div>


    </div>
  )
}

export default Hero