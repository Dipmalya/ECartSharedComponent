import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NumberInput, PasswordInput } from '../src';

storiesOf('NumberInput', module)
    .add('input', () => (
        <React.Fragment>
            <h2>Number Input</h2>
            <NumberInput value="" />
            <br/>

            <h2>Password Input</h2>
            <PasswordInput value="" />
            <br/>
        </React.Fragment>
    ));