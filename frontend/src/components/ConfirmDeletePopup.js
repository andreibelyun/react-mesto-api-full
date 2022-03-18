import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function ConfirmDeletePopup() {
    return (
        <PopupWithForm 
            title="Вы уверены?"
            name="delete-confirm"
            isOpen={false} 
            buttonText="Да"
        />
    );
}