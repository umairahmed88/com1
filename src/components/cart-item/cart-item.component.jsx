import React from 'react';

import {
    CartItemContainer,
    CartItemImage,
    ItemDetailContainer
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} />
        <ItemDetailContainer>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetailContainer>
    </CartItemContainer>
);

export default CartItem;