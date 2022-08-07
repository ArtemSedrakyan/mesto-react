import React from 'react';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditAvatarPopupOpen: false,
      isEditProfileOpen: false,
      isAddPlacePopupOpen: false,
      selectedCard: false
    };
  };

  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });
  };

  handleEditProfileClick = () => {
    this.setState({ isEditProfileOpen: true });
  };

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
  };

  handleCardClick = (cardElement) => {
    this.setState({ selectedCard: cardElement })
  };

  closeAllPopups = () => {
    this.setState({
      isEditAvatarPopupOpen: false,
      isEditProfileOpen: false,
      isAddPlacePopupOpen: false,
      selectedCard: false
    });
  };

  render() {
    return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={this.handleEditAvatarClick}
        onEditProfile={this.handleEditProfileClick}
        onAddPlace={this.handleAddPlaceClick}
        onCardView={this.handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={this.state.isEditProfileOpen}
        onClose={this.closeAllPopups}
        children={
          <>
          <label className="popup__field">
             <input  type="text" minLength="2" maxLength="40" id="name-input" name="name" value=""
              placeholder="Имя" className="popup__input popup__input_type_name" required/>
            <span className="popup__input-error name-input-error"></span>
          </label>
          <label className="popup__field">
            <input type="text" minLength="2" maxLength="200" id="about-input" name="about" value=""
              placeholder="О себе" className="popup__input popup__input_type_about" required/>
            <span className="popup__input-error about-input-error"></span>
          </label>
          </>
        }
      />
      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={this.state.isAddPlacePopupOpen}
        onClose={this.closeAllPopups}
        children={
          <>
          <label className="popup__field">
            <input type="text" minLength="1" maxLength="30" id="place-name" name="name" value="" placeholder="Название"
              className="popup__input popup__input_type_title" required/>
            <span className="popup__input-error place-name-error"></span>
          </label>
          <label className="popup__field">
            <input type="url" id="place-link" name="link" value="" placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_link" required/>
            <span className="popup__input-error place-link-error"></span>
          </label>
          </>
        }
      />
      <PopupWithForm name="confirm" title="Вы уверены?" />
      <PopupWithForm
        name="avatar"
        title="Редактировать аватар"
        isOpen={this.state.isEditAvatarPopupOpen}
        onClose={this.closeAllPopups}
        children={
          <>
          <label className="popup__field">
            <input  type="url" id="avatar-input" name="avatar" value=" "
              placeholder="Ссылка на аватар" className="popup__input popup__input_type_avatar" required/>
            <span className="popup__input-error avatar-input-error"></span>
          </label>
          </>
        }
      />
      <ImagePopup
        // isOpen={this.state.selectedCard}
        onClose={this.closeAllPopups}
        card={this.state.selectedCard}
      />
    </div>
    );
  };
}

export default App;