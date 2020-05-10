import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyledTab, StyledPanel, StyledItem } from './view';
import styled from 'styled-components';

const StyledIcon = styled.i`
    color: #FFF;
    float: right;
    margin: 0px 5px 2px 0px;
    font-size: 22px;
    cursor: pointer;
`;

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPanel: false
        }
    }

    toggleArrow = () => {
        const { showPanel } = this.state;
        this.setState({ showPanel: !showPanel });
    }

    render() {
        const {
            showPanel
        } = this.state;

        return (
            <div>
                <StyledTab onClick={this.toggleArrow}>
                    Category
                    <StyledIcon
                        className={showPanel ? 'fa fa-caret-up' : 'fa fa-caret-down'}
                    />
                </StyledTab>
                {showPanel && (
                    <StyledPanel>
                        <StyledItem>Sub-category1</StyledItem>
                        <StyledItem>Sub-category2</StyledItem>
                        <StyledItem>Sub-category3</StyledItem>
                    </StyledPanel>
                    )
                }
            </div>
        )
    }
}

Accordion.defaultProps = {

}

Accordion.propTypes = {

}

export default Accordion
