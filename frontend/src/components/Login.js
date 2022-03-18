import { useState } from 'react/cjs/react.development';
import './styles/Login.css';

export default function Login({ onLogin }) {

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

        onLogin(values.username, values.password);
    };
    
    return (
        <div className="login">
            <h2 className="login__title">Вход</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <input
                    className="login__input"
                    name="username"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.username}
                    required
                />
                <input
                    className="login__input"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    onChange={handleChange}
                    value={values.password}
                    required
                />
                <button
                    className="login__sign-in"
                    type="submit"
                    aria-label="Войти"
                >
                    Войти
                </button>
            </form>
        </div>
    );
}