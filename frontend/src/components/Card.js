import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
    
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner === currentUser._id;
    const cardDeleteButtonClassName = (`card__remove ${isOwn ? 'card__remove_active' : ''}`);
    const isLiked = props.card.likes.some(item => item === currentUser._id);
    const cardLikeButtonClassName = (`card__like ${isLiked ? 'card__like_active' : ''}`);

    const handleClick = () => {
        props.onCardClick(props.card);
    };
        
    const handleLikeClick = () => {
        props.onCardLike(props.card);
    };

    const handleDeleteClick = () => {
        props.onCardDelete(props.card);
    };

    return (
        <article className="card">
            <img 
                className="card__photo" 
                src={props.card.link} 
                alt={props.card.name} 
                onClick={handleClick}
            />
            <button 
                className={cardDeleteButtonClassName} 
                type="button" 
                aria-label="Удалить карточку" 
                onClick={handleDeleteClick} 
            />
            <div className="card__info">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like-group">
                    <button 
                        className={cardLikeButtonClassName} 
                        type="button" 
                        aria-label="Поставить лайк" 
                        onClick={handleLikeClick}
                    />   
                    <p className="card__likes-count">{props.card.likes.length}</p>
                </div>
            </div> 
        </article>
    );
}

export default Card;