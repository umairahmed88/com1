import React from 'react';

import {
    CheckoutItemContainer,
    CheckoutImageContainer,
    TextContainer,
    RemoveButtonContainer,
    QuantitySpan
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity }}) => (
    <CheckoutItemContainer>
        <CheckoutImageContainer>
            <img alt='item' src={imageUrl} />
        </CheckoutImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantitySpan>{quantity}</QuantitySpan>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
);

export default CheckoutItem;