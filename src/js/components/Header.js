import React, { Component } from "react";
import AddCardButton        from "./AddCardButton";
import AppBar               from '@material-ui/core/AppBar';
import Toolbar              from '@material-ui/core/Toolbar';
import Typography           from '@material-ui/core/Typography';
import blue                 from '@material-ui/core/colors/blue';

class Header extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <AppBar position="static" style={{backgroundColor: blue[500]}}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Cool card manager
                    </Typography>
                    <AddCardButton showAddCardForm = {this.props.showAddCardForm}/>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
