import './styles/Register.css';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

export default function Register({ onRegister }) {

    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setValues(prevVal => ({
            ...prevVal,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onRegister(values.username, values.password);
    }

    return (
        <div className="register">
            <h2 className="register__title">Регистрация</h2>
            <form className="register__form" onSubmit={handleSubmit}>
                <input
                    className="register__input"
                    name="username"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.username}
                    required
                />
                <input
                    className="register__input"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    onChange={handleChange}
                    value={values.password}
                    required
                />
                <button
                    className="register__sign-up"
                    type="submit"
                    aria-label="Зарегистрироваться"
                >
                    Зарегистрироваться
                </button>
            </form>
            <div className="register__sign-in">
                <p className="register__sign-in_text">Уже зарегистрированы?
                    <Link to="/sign-in" className="register__sign-in_link">
                        Войти
                    </Link>
                </p>
            </div>
        </div>
    );
}