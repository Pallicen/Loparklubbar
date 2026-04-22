import { Link } from "react-router-dom";
import { useAuth } from "../auth/context";

const LoginMeny = () => {

  const { session, logout } = useAuth();
  const isLoggedIn = !!session;

  return (

    <div>

    <nav className="login-menu">
        <div>
          <p className="logo">RunWithUs</p>
        </div>
      {isLoggedIn ? (
        <>
      <div className="account-buttons">
          <button className="logoutBtn" onClick={logout}>
            Logga ut
          </button>
        </div>
       </>
    ) : (
      <Link className="loginBtn" to="/LoginForm">
        Logga in
      </Link>
    )}
    </nav>

  </div>

  );
};

export default LoginMeny;