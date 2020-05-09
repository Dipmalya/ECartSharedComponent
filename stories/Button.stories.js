import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../src';

storiesOf('Button', module)
    .add('button', () => (
        <React.Fragment>
            <h2>Primary</h2>
            <Button.Primary onClick={action('clicked')}>Primary</Button.Primary>
            <br/>

            <h2>Secondary</h2>
            <Button.Secondary onClick={action('clicked')}>Secondary</Button.Secondary>
            <br/>

            <h2>Tertiary</h2>
            <Button.Tertiary onClick={action('clicked')}>Tertiary</Button.Tertiary>
        </React.Fragment>
    ));