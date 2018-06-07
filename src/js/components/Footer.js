import React, { Component } from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';

const StyledFooter = styled.div`
    box-sizing: border-box;
    height: 100px;
    background-color: #eee;
    border-top: 1px solid #e0e0e0;
    padding-top: 35px;
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
`;

class Footer extends Component {
  constructor() {
    super();
    this.state = {};

  }

  render() {
      return (
        <StyledFooter style={{backgroundColor: grey[200]}}>
            <Typography>Made by Laura Chacón. With love ❤️</Typography>
        </StyledFooter>
      )
  }
}

export default Footer;
