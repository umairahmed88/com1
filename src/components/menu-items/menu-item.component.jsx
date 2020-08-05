import React from 'react';

import {
    MenuItemContainer,
    ContentContainer,
    TitleContainer,
    SubTitleContainer,
    BackgorundImageContainer
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size }) => (
    <MenuItemContainer
        size={size}
    >
        <BackgorundImageContainer 
            className='backgorund-image'
            imageUrl={imageUrl}
        />
        <ContentContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubTitleContainer>Shop Now</SubTitleContainer>
        </ContentContainer>
    </MenuItemContainer>
);

export default MenuItem;