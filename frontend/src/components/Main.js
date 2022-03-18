import React, {useContext} from 'react';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main(props) {

    const currentUser = useContext(CurrentUserContext);
           
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-overlay" onClick={props.onEditAvatar}>
                    <div className="profile__change-avatar-icon" />
                </div> 
                <img className="profile__avatar" src={currentUser.avatar} alt="аватар пользователя"/>
                <div className="profile__intro">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button 
                        className="profile__edit" 
                        type="button" 
                        aria-label="Редактировать профиль"
                        onClick={props.onEditProfile}
                    />
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button 
                    className="profile__add-element" 
                    type="button" 
                    aria-label="Добавить карточку"
                    onClick = {props.onAddPlace} 
                />
            </section>

            <section className="cards">
                { props.cards.map(item => (
                    <Card
                        onCardDelete = {props.onCardDelete}
                        onCardLike = {props.onCardLike} 
                        onCardClick={props.onCardClick}
                        key={item._id} 
                        card={item}
                    />
                ))
                }
            </section>
        </main>
    );
}

export default Main;