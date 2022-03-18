import { Link, Route, Switch } from 'react-router-dom';
import './styles/Header.css';

function Header({ email, onSignOut }) {
    return (
        <header className="header">
            <a className="header__logo" href="#" target="_self"></a>
            <Switch>
                <Route path="/sign-in">
                    <Link to="/sign-up" className="header__link">
                        Регистрация
                    </Link>
                </Route>
                <Route path="/sign-up">
                    <Link to="/sign-in" className="header__link">
                        Войти
                    </Link>
                </Route>
                <Route path="/">
                    <div className='header__right-group'>
                        <p className='header__email'>{email}</p>
                        <Link to="/sign-in" className="header__link" onClick={onSignOut}>
                            Выйти
                        </Link>
                    </div>
                </Route>
            </Switch>
        </header>
    );
}

export default Header;