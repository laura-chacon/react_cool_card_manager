import React, { Component } from "react";
import { connect }          from "react-redux";
import ListCard             from "./Card";
import Columns              from 'react-columns';

const mapStateToProps = state => {
  return { cards: state.cards };
};

class ConnectedList extends Component {

  constructor() {
    super();
    this.state = {};

  }

  render() {
    return (
        <Columns columns="3" >
            {this.props.cards.map(card => (
                <ListCard
                    key={card.id}
                    card = {card}
                    onClickEditCard = {this.props.onClickEditCard}
                />
          ))}
        </Columns>
      )
    }
}

const List = connect(mapStateToProps, null)(ConnectedList);
export default List;
