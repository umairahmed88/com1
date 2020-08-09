import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
    CartIconContainer,
    CartItemCount,
    ShoppingIcon
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <CartItemCount>0</CartItemCount>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    null,
    mapDispatchToProps
)(CartIcon);