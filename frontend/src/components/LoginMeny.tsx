import { Link } from "react-router-dom";
import { useAuth } from "../auth/context";

const LoginMeny = () => {
  const { session, logout } = useAuth();
  const isLoggedIn = !!session;

  return (
    <nav className="login-menu">

      <div className="nav-left">
        <p className="logo">RUNWITHUS</p>
      </div>

      <div className="nav-right">
        {isLoggedIn ? (
          <button className="logoutBtn" onClick={logout}>
            Logga ut
          </button>
        ) : (
          <Link className="loginBtn" to="/LoginForm">
            Logga in
          </Link>
        )}
      </div>

    </nav>
  );
};

export default LoginMeny;