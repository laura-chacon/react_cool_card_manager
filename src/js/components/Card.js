import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import default_image from "../../images/default_image.jpg";
import { removeCard } from "../actions/index";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const R = require('ramda');

const mapDispatchToProps = dispatch => {
  return {
    removeCard: card => dispatch(removeCard(card))
  };
};

class ConnectedCard extends Component {
  constructor() {
    super();
    this.state = {
        showButtons: false,
    };

  }

  render() {
    const { title, description, imageUrl } = this.props.card;
    let url = imageUrl
    if(R.isEmpty(imageUrl)) {
        url = 'https://www.loottis.com/wp-content/uploads/2014/10/default-img.gif'
    }
    return (
      <Card
          className={'card-wrapper'}
          style = {{minHeight: '160px', margin: 3}}
      >
        <CardMedia
          className={'card-media'}
          title={title}
          style={{height: 0, paddingBottom: '56.25%'}}
        >
            <img src={url} style={{width: '100%', maxHeight: 175}}/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => this.props.onClickEditCard(this.props.card)}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => this.props.removeCard(this.props.card)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    )
  }
}

const ListCard = connect(null, mapDispatchToProps)(ConnectedCard);
export default ListCard;
