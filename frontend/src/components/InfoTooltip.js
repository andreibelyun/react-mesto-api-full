import './styles/InfoTooltip.css';
import successImage from '../images/tooltip-success.jpg';
import failImage from '../images/tooltip-fail.jpg';

export default function InfoTooltip({ status, isOpen, onClose }) {

    const successMessage = 'Вы успешно зарегистрировались!';
    const failMessage = 'Что-то пошло не так! Попробуйте ещё раз.';

    return (
        <div className={`tooltip ${isOpen && "tooltip_opened"}`}>
            <div className="tooltip__container">
                <button
                    className="tooltip__close"
                    type="button"
                    onClick={onClose}
                />
                <img
                    className="tooltip__image"
                    alt={status === "success" ? "Чёрная галочка" : "Красный крест"}
                    src={status === "success" ? successImage : failImage}
                />
                <p className="tooltip__message">
                    {status === "success" ? successMessage : failMessage}
                </p>
            </div>
        </div>
    );
}