import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    CheckoutImageContainer,
    TextContainer,
    RemoveButtonContainer,
    QuantitySpan
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <CheckoutItemContainer>
        <CheckoutImageContainer>
            <img alt='item' src={imageUrl} />
        </CheckoutImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantitySpan>
            <div onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={() => addItem(cartItem)}>&#10095;</div>
        </QuantitySpan>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItem(clearItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)};

const mapDisptchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(
    null,
    mapDisptchToProps
)(CheckoutItem);