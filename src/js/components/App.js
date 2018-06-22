import React, { Component } from "react";
import List                 from "./List";
import Form                 from "./Form";
import Footer               from "./Footer";
import Header               from "./Header";

const emptyCard = {
   id: null,
   title: '',
   description: '',
   imageUrl: ''
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            showAddCardForm: false,
            editCard: false
        };

        this.onClickEditCard    = this.onClickEditCard.bind(this);
        this.onClickAddCardForm = this.onClickAddCardForm.bind(this);
        this.closeModal         = this.closeModal.bind(this);
    }

    render() {
        return (
          <div>
              <div className="col-md-4 offset-md-1">
                  <Header
                      showAddCardForm = {this.onClickAddCardForm}
                  />
                  <Form
                      showAddCardForm = {this.state.showAddCardForm || this.state.editCard}
                      editingCard     = {this.state.editCard}
                      addingCard      = {this.state.showAddCardForm}
                      card            = {this.state.editCard ? this.state.cardToEdit : emptyCard}
                      closeModal      = {this.closeModal}
                  />
              </div>
              <List onClickEditCard = {this.onClickEditCard}/>
              <Footer/>
          </div>
        )
    }

    onClickAddCardForm() {
        this.setState({showAddCardForm: true})
    }

    onClickEditCard(card) {
        this.setState({editCard: true, cardToEdit: card})
    }

    closeModal() {
        this.setState({showAddCardForm: false, editCard: false});
    }
}

export default App;
