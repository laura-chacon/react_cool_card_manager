import React, { Component } from "react";
import { connect }          from "react-redux";
import { removeCard }       from "../actions/index";
import Card                 from '@material-ui/core/Card';
import CardActions          from '@material-ui/core/CardActions';
import CardContent          from '@material-ui/core/CardContent';
import CardMedia            from '@material-ui/core/CardMedia';
import Button               from '@material-ui/core/Button';
import Typography           from '@material-ui/core/Typography';
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
        return (
            <Card
                className = {'card-wrapper'}
                style     = {{minHeight: '160px', margin: 3}}
            >
                {this.renderImage(title, imageUrl)}
                {this.renderTitleAndDescription(title, description)}
                {this.renderButtons()}
          </Card>
      )
    }

    renderImage(title, imageUrl) {
        let url = imageUrl
        if(R.isEmpty(imageUrl)) {
            url = 'https://www.loottis.com/wp-content/uploads/2014/10/default-img.gif'
        }
        return (
            <CardMedia
              className = {'card-media'}
              title     = {title}
              style     = {{height: 0, paddingBottom: '56.25%'}}
            >
                <img
                    src={url}
                    alt="background-img"
                    style={{width: '100%', maxHeight: 175}}
                />
            </CardMedia>
        )
    }

    renderTitleAndDescription(title, description) {
        return (
            <CardContent>
                <Typography noWrap={true} variant="headline" component="h2">
                    {title}
                </Typography>
                <Typography noWrap={true} component="p">
                    {description}
                </Typography>
            </CardContent>
        )
    }

    renderButtons() {
        return (
            <CardActions>
                {this.renderButton('Edit', () => this.props.onClickEditCard(this.props.card))}
                {this.renderButton('Delete', () => this.props.removeCard(this.props.card))}
            </CardActions>
        )
    }

    renderButton(text, onPress) {
        return (
            <Button
              size    = "small"
              color   = "primary"
              onClick = {onPress}
            >
                {text}
            </Button>
        )
    }
}

const ListCard = connect(null, mapDispatchToProps)(ConnectedCard);
export default ListCard;
