import React from 'react';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import { createStructuredSelector } from 'reselect';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector'

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionsLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionsLink to='/shop'>Shop</OptionsLink>
            <OptionsLink to='/contact'>Contact</OptionsLink>
            {
                currentUser ?
                <OptionsLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionsLink>
                :
                <OptionsLink to='/signin'>Sign In</OptionsLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);