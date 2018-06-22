import React, { Component } from "react";
import styled               from "styled-components";
import grey                 from '@material-ui/core/colors/grey';
import Typography           from '@material-ui/core/Typography';
import Toolbar              from '@material-ui/core/Toolbar';
import AppBar               from '@material-ui/core/AppBar';

const StyledFooter = styled(AppBar)`
    && {
        bottom: 0;
        height: 100px;
        position: absolute;
        justify-content: center;
        align-items: center;
    }
`;

class Footer extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <StyledFooter position="static" style={{backgroundColor: grey[300]}}>
                <Toolbar>
                    <Typography noWrap={true}>
                        Made by Laura Chacón. With love <span role="img" aria-label="heart">❤️</span>
                    </Typography>
                </Toolbar>
            </StyledFooter>
        )
    }
}

export default Footer;
