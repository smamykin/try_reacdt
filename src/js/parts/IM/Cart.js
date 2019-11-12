import * as React from "react";
import {Icon} from "@material-ui/core";
import PropTypes from 'prop-types';

export default class Cart extends React.Component
{
    get cartItems(){
        return this.props.cart;
    }

    render() {
        return (
            <div className={'cart-container'}>
                {this.cartItems.map((item) => {
                    return (
                        <div key={item.product.id} className="cart-item">
                            <div className="cart-item__item cart-item__product-name">{item.product.name}</div>
                            <div className={'cart-item__item cart-item__quantity-plus'}><Icon>add</Icon></div>
                            <div className="cart-item__item cart-item__quantity">{item.quantity}</div>
                            <div className={'cart-item__item cart-item__quantity-minus'}><Icon>remove</Icon></div>
                            <div className="cart-item__item cart-item__price">
                                {item.product.price * item.quantity}$
                            </div>
                            <div className="cart-item__item cart-item__delete"><Icon>delete</Icon></div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
// PropTypes
Cart.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.exact({
            quantity: PropTypes.number.isRequired,
            product: PropTypes.exact({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired
            })
        })
    ).isRequired
};
