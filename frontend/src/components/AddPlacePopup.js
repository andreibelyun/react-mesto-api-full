import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, ...props }) {

    const [values, setValues] = useState({
        name: "",
        link: ""
    });

    const handleChange = (e) => {
        setValues(prevVal => ({
            ...prevVal,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onAddPlace({
            name: values.name,
            link: values.link
        });
    };

    React.useEffect(() => {
        setValues({
            name: "",
            link: ""
        });
    }, [isOpen]);

    return (
        <PopupWithForm
            title="Новое место"
            name="create-place"
            isOpen={isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonText="Создать"
        >
            <div className="popup__section">
                <input
                    value={values.name}
                    onChange={handleChange}
                    id="place-name-input"
                    name="name"
                    className="popup__input popup__input_type_name"
                    type="text"
                    placeholder="Название"
                    required minLength="2"
                    maxLength="30"
                />
                <span className="popup__input-error place-name-input-error" />
            </div>

            <div className="popup__section">
                <input
                    value={values.link}
                    onChange={handleChange}
                    id="link-input"
                    name="link"
                    className="popup__input popup__input_type_description"
                    type="url"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="popup__input-error link-input-error" />
            </div>
        </PopupWithForm>
    );
}