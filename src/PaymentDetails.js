import React, { useState } from 'react';
import './PaymentDetails.css'

function paymentDetails() {
    return (
        <div className='paymentDetails'>
            <p>Card Details</p>
            <p className='cardTypeText'>Card Type</p>
            <div className='cardImage' alt='Card Image'>
                <p className='myCardHeader'>My Card</p>
            </div>
            <input type='text' className='nameOnCard' placeholder='Name on Card'></input>
            <p className='cardNumberTag'>Card Number</p>
            <input type='text' className='nameOnCard cardNumberInput' placeholder="Enter the 16 digit number" />
            <div className="dateandCVV">
                <p className='cardNumberTag'>Card Expiry MM and YYYY details</p>
                <div className="dateExpiry">
                    <input type='text' className='nameOnCard DateNumberInput' placeholder="MM" />
                    <input type='text' className='nameOnCard DateNumberInput' placeholder="YYYY" />
                </div>
            </div>
            <p className='cardNumberTag'>Card Expiry MM and YYYY details</p>
            <input type='text' className='nameOnCard DateNumberInput' placeholder="CVV" />
            <div className='checkOutDiv'>
                <button className='checkOutButton'>Check Out</button>
            </div>
        </div>
    )
}

export default paymentDetails;