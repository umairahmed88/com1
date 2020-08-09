import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import {
    CartDropdownContainer,
    CartDropdownItemContainer,
    CartDropdownButton
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems }) => (
    <CartDropdownContainer>
        <CartDropdownItemContainer>
        {
            cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
            ))}
        </CartDropdownItemContainer>
        <CartDropdownButton>Go To Checkout</CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);