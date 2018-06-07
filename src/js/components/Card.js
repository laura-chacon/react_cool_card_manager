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

const CardWrapper = styled.div`
  background-color: white;
  margin-right: 5%;
  margin-bottom: 10px;
  border: 0.5px solid black;
  border-radius: 3px;
  position: 'relative';
`;

const ImageAndTitle = styled.div`
    width: 100%;
    height: 80%;
    background-size: 100%;
`;


const Title = styled.div`
    position: 'absolute';
    margin-left: 5px;
    font-family: 'Helvetica';
    text-transform: capitalize;
`;

const Description = styled.div`
    width: 100%;
    height: 20%;
    margin-left: 5px;
    font-family: 'Helvetica';
    text-transform: capitalize;
`;

const EditAndDeleteButtonsContainer = styled.div`
    position: absolute;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: 'none';
    width: 30%;
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 5px;
`;

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
    console.log('this.props', this.props)
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
            <img src={url} style={{width: '100%'}}/>
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
    /*
    return (
      <CardWrapper
          onMouseEnter = {() => this.setState({showButtons: true})}
          onMouseLeave = {() => this.setState({showButtons: false})}
      >
          {this.renderEditAndDeleteButtons()}
          {this.renderImageAndTitle(title, imageUrl)}
          <Description>{description}</Description>
      </CardWrapper>
    );
    */
  }

  renderImageAndTitle(title, imageUrl) {
    if(R.isEmpty(imageUrl)) {
      imageUrl = '../../images/default_image.jpg'
    }
    return (
        <ImageAndTitle style={{backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover'}}>
            <Title>{title}</Title>
        </ImageAndTitle>
    )
  }

  renderEditAndDeleteButtons() {
      if(this.state.showButtons) {
        let editIcon = require(`../../images/edit_icon.jpg`)
        let deleteIcon = require(`../../images/delete_icon.jpg`)
          return (
              <EditAndDeleteButtonsContainer>
                  <Icon
                      onClick={() => {}}
                      style={{backgroundImage: `url(${editIcon})`, backgroundSize: 'cover'}}
                  />
                  <Icon
                    style={{backgroundImage: `url(${deleteIcon})`, backgroundSize: 'cover'}}
                    onClick={() => this.props.removeCard(this.props.card)}
                  />
              </EditAndDeleteButtonsContainer>
          )
      }
      else return null;
  }
}

const ListCard = connect(null, mapDispatchToProps)(ConnectedCard);
export default ListCard;
