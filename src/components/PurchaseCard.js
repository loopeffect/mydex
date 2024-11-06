import React from 'react'
import './css/purchasecard.css'
function PurchaseCard() {
  return (
   <>
   <div className='formdiv'>
    <h3 className='presale'>Presale</h3>
    <h4 className='timer'>12:00:00</h4>
    <label className='label'>RFC</label><br/>
    <input className='inputfields' type="text"/><br/>
    <label className='label'>ETH</label><br></br>
    <input className='inputfields' type="text"/><br/>
    <input type="submit" value="Submit"></input>
   </div>
   </>
  )
}

export default PurchaseCard