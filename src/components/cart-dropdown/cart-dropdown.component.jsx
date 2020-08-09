import React from 'react';

import {
    CartDropdownContainer,
    CartDropdownItemContainer,
    CartDropdownButton
} from './cart-dropdown.styles';

const CartDropdown = () => (
    <CartDropdownContainer>
        <CartDropdownItemContainer />
        <CartDropdownButton>Go To Checkout</CartDropdownButton>
    </CartDropdownContainer>
);

export default CartDropdown;