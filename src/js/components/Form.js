import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addCard, editCard } from "../actions/index";
import Modal from 'react-modal';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

const R = require('ramda');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

const ModalTitle = styled.div`
    color: grey;
    text-align: center;
    margin-bottom: 15px;
    font-size: 20px;
`;

const FormGroup = styled.div`
    margin-bottom: 25px;
    flex: 1;
    padding-left: 25px;
    padding-right: 25px;
`;

const InputElement = styled.input`
    background-color: white;
    border: 0px solid black;
    border-bottom-width: 1px;
    border-color: grey;
    width: 225px;
    height: 40px;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AddButton = styled.button`
    height: 30px;
    width: 80px;
    background: #dd4b39;
    border-radius: 0px;
    border: 0px solid black;
    color: white;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
`;

const mapDispatchToProps = dispatch => {
  return {
    addCard: card => dispatch(addCard(card)),
    editCard: card => dispatch(editCard(card))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      title: "",
      description: "",
      imageUrl: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id, title, description, imageUrl } = this.state;
    if(this.props.editingCard) {
        this.props.editCard({ title, id, description, imageUrl });
    }
    else {
        const id = uuidv1();
        this.props.addCard({ title, id, description, imageUrl });
    }
    this.setState({ id: "", title: "", description: "", imageUrl: "" });
    this.props.closeModal()
  }

  componentWillReceiveProps(nextProps) {
    let {id, title, description, imageUrl} = nextProps.card;
    if(!R.equals(id, this.state.id)) {
        this.setState({id: this.state.id})
    }
    if(!R.equals(title, this.state.title)) {
        this.setState({title: this.state.title})
    }
    if(!R.equals(description, this.state.description)) {
        this.setState({description: this.state.description})
    }
    if(!R.equals(imageUrl, this.state.imageUrl)) {
        this.setState({imageUrl: this.state.imageUrl})
    }
  }

  render() {
    const { title, description, imageUrl } = this.state;
    const { editingCard } = this.props;

    let cardTitle = editingCard ? 'Edit card' : 'New card'
    let buttonTitle = editingCard ? 'Edit' : 'Add'
    return (
      <Modal
          isOpen={this.props.showAddCardForm}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <form onSubmit={this.handleSubmit}>
                <ModalTitle>{cardTitle}</ModalTitle>
                <FormGroup className="form-group">
                  <InputElement
                      type="text"
                      className="form-control"
                      id="title"
                      value={title}
                      onChange={this.handleChange}
                      placeholder = 'Title'
                    />
                </FormGroup>
                <FormGroup className="form-group">
                    <InputElement
                      type="text"
                      className="form-control"
                      id="description"
                      value={description}
                      onChange={this.handleChange}
                      placeholder = 'Description'
                    />
                </FormGroup>
                <FormGroup className="form-group">
                    <InputElement
                      type="text"
                        className="form-control"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={this.handleChange}
                        placeholder = 'Image (Url)'
                      />
                  </FormGroup>
                  <ButtonContainer>
                      <Button
                          variant="contained"
                          aria-label="add"
                          style={{backgroundColor: blue[500], color: 'white'}}
                          type="submit"
                      >
                          {buttonTitle}
                      </Button>
                  </ButtonContainer>
            </form>
        </Modal>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
