import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleImgClick = () => {
    console.dir(this)
    this.props.onCardClick(this.props.card);
  }

  render() {
    return (
      <li className="element">
        <img className="element__image" src={this.props.card.link} alt={this.props.card.name} onClick={this.handleImgClick} />
        <h2 className="element__place-name">{this.props.card.name}</h2>
        <button className="element__like-button" type="button" aria-label="Лайк">
          <span className="element__like-counter">{this.props.card.likes.length}</span>
        </button>
        <button className="element__delete-button" type="button" aria-label="Удалить карточку" />
      </li>
    );
  }
}

export default Card;
