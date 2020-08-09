import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

import {
    CartDropdownContainer,
    CartDropdownItemContainer,
    CartDropdownButton
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems }) => (
    <CartDropdownContainer>
        <CartDropdownItemContainer />
        {
            cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
            ))}
        <CartDropdownButton>Go To Checkout</CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);