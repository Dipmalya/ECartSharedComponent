import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NumberInput, PasswordInput, Input } from '../src';

storiesOf('Input', module)
    .add('input', () => (
        <React.Fragment>
            <h2>Number Input</h2>
            <NumberInput value="" />
            <br/>

            <h2>Password Input</h2>
            <PasswordInput value="" />
            <br/>

            <h2>Text Input</h2>
            <Input value="" type="text" />
            <br/>

            <h2>Email Input</h2>
            <Input value="" type="email" />
            <br/>
        </React.Fragment>
    ));