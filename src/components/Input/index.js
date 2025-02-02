import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyledInput } from './view';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            value: this.props.value,
            type: this.props.type,
            error: false
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        const { name, value, error } = this.state;
        this.props.onChange({ name, value, error });
    }

    validate = () => {
        const { type, value } = this.state;
        switch(type) {
            case 'email': {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                this.setState({ error: !(re.test(String(value).toLowerCase())) });
            }
        }
    }

    render() {
        const {
            name,
            value,
            type,
            error
        } = this.state;
        console.log(error);
        return (
            <div>
                <StyledInput
                    name={name}
                    type={type}
                    value={value}
                    error={error}
                    onChange={this.handleChange}
                    onBlur={this.validate}
                />
            </div>
        )
    }
}

Input.defaultProps = {
    id: '',
    name: 'text',
    value: '',
    onChange: () => {}
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.shape(),
    onChange: PropTypes.func
}

export default Input
