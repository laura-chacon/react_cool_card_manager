import React, { Component } from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import pink from '@material-ui/core/colors/pink';

const StyledButton = styled(Button)`
    && {
        position: absolute;
        right: 0;
        top: 35px;
        margin-right: 16px;
    }
`;

class AddCardButton extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <StyledButton
                variant    ="fab"
                color      ="primary"
                aria-label ="add"
                style      = {{backgroundColor: pink[500]}}
                onClick    = {this.props.showAddCardForm}
            >
                <AddIcon/>
            </StyledButton>
        )
    }
}

export default AddCardButton;
