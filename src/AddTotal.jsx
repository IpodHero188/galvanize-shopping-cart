import React, {Component} from 'react';

class AddTotal extends Component {

    calculateTotal = () => {
        const {cartItems} = this.props;

        let sum = 0;

        cartItems.forEach(cartItem => {
            sum = sum + (cartItem.product.priceInCents * Number(cartItem.quantity))
        });
        return this.convertCentsToDollar(sum);
    }

    convertCentsToDollar = dollarValue => dollarValue / 100;

    render(){
        return (
            <div>
                <span>Total Price: ${this.calculateTotal()}</span>
            </div>
        );
    }
}

export default AddTotal;