import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Accordion } from '../src';

const data = [
    {
        category: 'Category 1',
        options: [
            {
                subCategory: 'Sub Category',
                link: 'subcategory'
            },
            {
                subCategory: 'Sub Category',
                link: 'subcategory'
            },
            {
                subCategory: 'Sub Category',
                link: 'subcategory'
            }
        ]
    },
    {
        category: 'Category 1',
        options: [
            {
                subCategory: 'Sub Category',
                link: 'subcategory'
            },
            {
                subCategory: 'Sub Category',
                link: 'subcategory'
            },
            {
                subCategory: 'Sub Category',
                link: 'subcategory'
            }
        ]
    }
]

storiesOf('Accordion', module)
    .add('accordion', () => (
        <React.Fragment>
            <h2>Accordion</h2>
            {
                data.map((item, index) => <Accordion key={index} item={item} />)
            }
        </React.Fragment>
    ));