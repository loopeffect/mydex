import React from 'react'
import './css/purchasecard.css'
function PurchaseCard() {
var hour="12";
var min = "00";
var sec = "00";
  
  return (
   <>
   <div className='formdiv'>
    <h3 className='presale'>PRESALE</h3>
    <h4 className='timer'>{hour}    :    {min}    :  {sec}</h4>
    <label className='label'>RFC</label><br/>
    <input className='inputfields' type="text"/><br/>
    <label className='label'>ETH</label><br></br>
    <input className='inputfields' type="text"/><br/>
    <input type="submit" value="Submit" className='submit'></input>
   </div>
   </>
  )
}

export default PurchaseCard