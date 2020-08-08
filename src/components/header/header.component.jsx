import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo} from '../../assets/crown.svg';

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionsLink
} from './header.styles';

const Header = ({ currentUser }) => (
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
        </OptionsContainer>
    </HeaderContainer>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);