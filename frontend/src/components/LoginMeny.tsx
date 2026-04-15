import { Link } from "react-router-dom";
import { useAuth } from "../auth/context";

const LoginMeny = () => {

  const { session, logout } = useAuth();
  const isLoggedIn = !!session;

  return (

    <nav className="login-menu">
      <div className="logodiv">
        <div>
        <p className="logo">RunWithUs</p>
        </div>
      {isLoggedIn ? (
        <>
        <div>
      <div className="account-buttons">
            <Link className="createRunClubBtn" to="/CreateRunClub">+ Löparklubb</Link>
            <Link className="createEventBtn" to="/CreateEvent">+ Lopp</Link>
      <button className="logoutBtn" onClick={logout}>
        Logga ut
      </button>
          </div>
      </div>
          </>
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