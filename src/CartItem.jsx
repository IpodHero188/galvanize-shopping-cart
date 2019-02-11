import React from 'react';

const CartItem = props => (
    <div className="collection-item">
        <div className="row">
        <div className="col-md-8">{props.item.name}</div>
        <div className="col-md-2">${convertCentsToDollar(props.item.priceInCents)}</div>
        <div className="col-md-2">{props.quantity}</div>
    </div>
</div>
);

const convertCentsToDollar = dollarValue => dollarValue / 100;

export default CartItem;