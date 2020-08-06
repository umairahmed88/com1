import React from 'react';


import { ReactComponent as Logo} from '../../assets/crown.svg';

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionsLink
} from './header.styles';

const Header = () => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionsLink to='/shop'>Shop</OptionsLink>
            <OptionsLink to='/contact'>Contact</OptionsLink>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;