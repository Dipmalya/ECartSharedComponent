import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ItemCard } from '../src';

storiesOf('Item Card', module)
    .add('card', () => (
        <React.Fragment>
            <h2>Item Card</h2>
            <ItemCard 
                itemName="Dummy Name"
                itemCategory="Dummy Category"
                itemPrice="750"
            />
        </React.Fragment>
    ));