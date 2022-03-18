function ImagePopup(props) {

    return (
        <div className={`popup popup_type_photo-view ${props.card.link && 'popup_opened'}`}>
            <div className="popup__container popup__container_type_photo">
                <img className="popup__photo" src={props.card.link} alt={props.card.name} />
                <p className="popup__photo-caption">{props.card.name}</p>
                <button className="popup__close" type="button" aria-label="Закрыть окно" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default ImagePopup;