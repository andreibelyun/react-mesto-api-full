import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ path, loggedIn, children }) {

    return (
        <Route exact path={path}>
            {() => loggedIn ? children : <Redirect to="/sign-in" />}
        </Route>
    );
}