import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: [ ]
    }
  }

  componentDidMount() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
      this.setState({
        userName: userData.name,
        userDescription: userData.about,
        userAvatar: userData.avatar,
        cards: cards
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <main className="page__element content">
        <section className="profile">
          <button className="profile__avatar-button" type="button" aria-label="Редактировать аватар" onClick={this.props.onEditAvatar}>
            <img className="profile__avatar" id="avatar" src={this.state.userAvatar} alt="Ваш аватар"/>
          </button>
          <div className="profile__info">
            <h1 className="profile__name" id="name">{this.state.userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={this.props.onEditProfile}></button>
            <p className="profile__about" id="about">{this.state.userDescription}</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={this.props.onAddPlace}></button>
        </section>
        <section className="page__element">
          <ul className="elements">
            {this.state.cards.map((element) => {
              return (
              <Card key={element._id} card = {element} onCardClick = {this.props.onCardView} />
              );
            })}
          </ul>
        </section>
      </main>
    );
  }

}

export default Main;
