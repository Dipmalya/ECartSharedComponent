import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Accordion } from '../src';

storiesOf('Accordion', module)
    .add('accordion', () => (
        <React.Fragment>
            <h2>Accordion</h2>
            <Accordion />
            <Accordion />
            <Accordion />
        </React.Fragment>
    ));