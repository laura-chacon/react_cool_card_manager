import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
import Footer from "./Footer";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

const emptyCard = {
   id: null,
   title: '',
   description: '',
   imageUrl: ''
}

const Container = styled.div`

`;

const AddCardButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, pink, orange);
    border-radius: 20px;
    color: white;
    cursor: pointer;
    box-shadow: 1px 3px 1px #9E9E9E;

    &:hover {
      opacity: 0.8;
    }
`;

const AddCardButtonText = styled.div`
    font-size: 28px;
`;

const StyledButton = styled(Button)`
    && {
        position: absolute;
        right: 0;
        margin-right: 16px;
    }
`;

const StyledAppBar = styled(AppBar)`
    && {

    }
`;
2
class App extends Component {
  constructor() {
    super();
    this.state = {
        showAddCardForm: false,
        editCard: false
    };

    this.onClickEditCard = this.onClickEditCard.bind(this);
  }

  render() {
      return (
        <Container>
            <div className="col-md-4 offset-md-1">
                <StyledAppBar position="static" style={{backgroundColor: blue[500]}}>
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Cool card manager
                        </Typography>

                        <StyledButton
                            variant="fab"
                            color="primary"
                            aria-label="add"
                            style={{backgroundColor: pink[500]}}
                            onClick={() => this.setState({showAddCardForm: true})}
                        >
                            <AddIcon/>
                        </StyledButton>
                    </Toolbar>
                </StyledAppBar>
                <Form
                    showAddCardForm = {this.state.showAddCardForm || this.state.editCard}
                    editingCard     = {this.state.editCard}
                    card            = {this.state.editCard ? this.state.cardToEdit : emptyCard}
                    closeModal      = {() => this.closeModal()}
                />
            </div>
            <List
              onClickEditCard = {(card) => this.onClickEditCard(card)}
            />
            {/*<Footer/>*/}
        </Container>
      )
  }

  onClickEditCard(card) {
    this.setState({editCard: true, cardToEdit: card})
  }

  closeModal() {
    this.setState({showAddCardForm: false, editCard: false});
  }
}

export default App;
