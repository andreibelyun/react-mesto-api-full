import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, ...props }) {

    const avatarLinkInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onUpdateAvatar({ link: avatarLinkInput.current.value });
    };

    React.useEffect(() => {
        avatarLinkInput.current.value = "";
    }, [isOpen]);

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            title="Обновить аватар"
            name="change-avatar"
            buttonText="Сохранить"
        >
            <div className="popup__section">
                <input
                    ref={avatarLinkInput}
                    id="avatar-link-input"
                    name="link"
                    className="popup__input popup__input_type_description"
                    type="url"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="popup__input-error avatar-link-input-error" />
            </div>
        </PopupWithForm>
    );
}