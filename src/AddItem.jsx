import React, {Component} from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            product: {}
        }

        this.onProductChange  = this.onProductChange.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);
    }

    onQuantityChange = event => {
        event.preventDefault();
        this.setState({quantity: event.target.value});
    }

    onProductChange = event => {
        event.preventDefault();
        let product = this.props.products.find(product => {
            return product.name === event.target.value;
        });
        this.setState({product: product});
    }

    submitNewItem = (event) => {
        event.preventDefault();
        this.props.shoppingFunction(this.state.product, this.state.quantity);
    }

    render(){
        return (
        
            <form onSubmit={this.submitNewItem}>
                <div className="form-group">
                    <label for="quantityInput">Quantity</label>
                    <input type="text" className="form-control" id="quantityInput" name="quantityInput" onChange={this.onQuantityChange}/>
                </div>
                <div className="form-group">
                    <label for="productSelect">Products</label>
                    <select className="custom-select" id="productSelect" name="productSelect" onChange={this.onProductChange}>
                        <option>Select an option...</option>
                        {this.props.products.map(product=>
                            <option key={product.id} value={product.name} name={product.name}>{product.name}</option>
                        )}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
    // render(){
    //     return 
    //     (
        
    //         // //return selected event
    //         // function findSelectedOption(e){
    //         //     return e.target
    //         // }
        
    //         <form onSubmit={props.shoppingFunction}>
    //             <div className="form-group">
    //                 <label for="quantityInput">Quantity</label>
    //                 <input type="text" className="form-control" id="quantityInput" name="quantityInput" />
    //             </div>
    //             <div className="form-group">
    //                 <label for="productSelect">Products</label>
    //                 <select className="custom-select" id="productSelect" name="productSelect">
    //                     <option>Select an option...</option>
    //                     {props.products.map(product=>
    //                         <option key={product.id} value={product.name} name={product.name}>{product.name}</option>
    //                     )}
    //                 </select>
    //             </div>
    //             <button type="submit" className="btn btn-primary">Submit</button>
    //         </form>
    //     )
    // }
}


export default AddItem;