import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NumberInput } from '../src';

storiesOf('NumberInput', module)
    .add('input', () => (
        <React.Fragment>
            <h2>Number Input</h2>
            <NumberInput value="1" />
            <br/>
        </React.Fragment>
    ));