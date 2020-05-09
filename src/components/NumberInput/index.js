import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { StyledNumberInput, Button } from './view';

class NumberInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    handleClick = (event) => {
        const { value } = this.state;
        const buttonType = event.target.innerHTML;
        if (buttonType === '+') {
            this.setState({ value: parseInt(value) + 1 });
        }
        else if (buttonType === '-' && parseInt(value) > 1) {
            this.setState({ value: parseInt(value) - 1 });
        }
    }

    render() {
        const {
            value
        } = this.state;
        return (
            <Fragment>
                <Button onClick={this.handleClick}>+</Button>
                <StyledNumberInput
                    value={value}
                />
                <Button onClick={this.handleClick}>-</Button>
            </Fragment>
        )
    }
}

NumberInput.defaultProps = {
    id: '',
    value: 1
}

NumberInput.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.shape()
}

export default NumberInput
