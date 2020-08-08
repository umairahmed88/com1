import React from 'react';

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

export default Header;