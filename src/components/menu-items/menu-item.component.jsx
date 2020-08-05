import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    ContentContainer,
    TitleContainer,
    SubTitleContainer,
    BackgorundImageContainer
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);