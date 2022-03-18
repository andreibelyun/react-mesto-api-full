import React, {useState, useContext} from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {

    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onUpdateUser({
            name, 
            about: description
        });
    };
    
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    return (
        <PopupWithForm
            isOpen={props.isOpen} 
            onClose={props.onClose}
            onSubmit={handleSubmit}
            title="Редактировать профиль" 
            name="edit-profile"
            buttonText="Сохранить"
        >
            <div className="popup__section">
                <input
                    value={name ? name : ""}
                    onChange={handleChangeName}
                    id="name-input" 
                    name="name" 
                    className="popup__input popup__input_type_name" 
                    type="text" 
                    placeholder="Имя" 
                    required minLength="2" 
                    maxLength="40"
                />
                <span className="popup__input-error name-input-error"/>
            </div>

            <div className="popup__section">
                <input
                    value={description ? description : ""}
                    onChange = {handleChangeDescription}
                    id="description-input" 
                    name="about" 
                    className="popup__input popup__input_type_description" 
                    type="text" 
                    placeholder="Описание" 
                    required minLength="2" 
                    maxLength="200"              
                />
                <span className="popup__input-error description-input-error" />
            </div>
            
        </PopupWithForm>
    );
}