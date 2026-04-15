import { Link } from "react-router-dom";
import { useAuth } from "../auth/context";

const LoginMeny = () => {

  const { session, logout } = useAuth();
  const isLoggedIn = !!session;

  return (

    <nav className="login-menu">
      <div className="logodiv">
          <p className="logo">RunWithUs</p>
      </div>
      <div className="account-buttons">
        {isLoggedIn ? (
          <>
            <Link className="createRunClubBtn" to="/CreateRunClub">Lägg till löparklubb</Link>
            <Link className="createEventBtn" to="/CreateEvent">Lägg till lopp</Link>
            <button className="loginBtn" onClick={logout}>Logga ut</button>
          </>
        ) : (
          <>
            <Link className="loginBtn" to="/LoginForm">Logga in</Link>
            <Link className="createAccountBtn" to="/RegisterForm">Skapa konto</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default LoginMeny;