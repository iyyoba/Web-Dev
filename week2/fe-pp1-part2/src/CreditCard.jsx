import React from 'react'

import "./CreditCard.css"
function CreditCard(props) {
    return (
        <div className="CreditCardContainer">
            <div className="CreditCard"
                style={{ backgroundColor: props.bgColor, color: props.color }}
            >
                <img className="type" src={props.type} alt={" "} />
                <p className='number'> <strong>**** **** **** </strong> {props.number.slice(-4)}</p>
                <p>Expires: {props.expirationMonth}/{props.expirationYear} {props.bank} </p>
                <p className="owner"> {props.owner}</p>
            </div>
        </div>

    )
}

export default CreditCard