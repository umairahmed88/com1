import React from 'react';

import { 
    CollectionItemContainer,
    CollectionImageContainer,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <CollectionItemContainer>
        <CollectionImageContainer className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
    </CollectionItemContainer>
);

export default CollectionItem;