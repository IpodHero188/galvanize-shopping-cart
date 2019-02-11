import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import AddItem from './AddItem';
import AddTotal from './AddTotal';

class App extends Component {
    constructor(props){
      super(props);
      this.state = { cartItemsList: [
                                { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
                                { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
                                { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
                              ],
                products: [
                            { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
                            { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
                            { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
                            { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
                            { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
                            { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
                            { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
                            { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
                            { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
                          ],
                addedItem: {}
              }
    this.shoppingFunction = this.shoppingFunction.bind(this);
    }

  shoppingFunction = (addedProduct, addedQuantity) => {
    let addedProd = this.state.cartItemsList.find(cartItem => {
        return cartItem.product.id === addedProduct.id;
    });
    
    //If the product has not been found, add it to the list
    if(addedProd === undefined) {
      const addCartItem = {id: this.state.cartItemsList.length +1, product: addedProduct, quantity: addedQuantity};
      this.setState({cartItemsList: this.state.cartItemsList.concat(addCartItem)});
    } else{
      //The product exists and the list will be updated
      const updatedCartList = this.state.cartItemsList.map(cartItem => {
          const newQuantity = (cartItem.product.id === addedProd.product.id) ? cartItem.quantity + Number(addedQuantity) : cartItem.quantity;
          cartItem.quantity = newQuantity;
          return cartItem;
      });
      this.setState({cartItemsList: updatedCartList});
    }
  };

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItems={this.state.cartItemsList} />
        <AddTotal cartItems={this.state.cartItemsList} />
        <AddItem products={this.state.products} shoppingFunction={this.shoppingFunction}/>
        <CartFooter copyright='&copy; 2016'/>
      </div>
    );
  }
}

export default App;
