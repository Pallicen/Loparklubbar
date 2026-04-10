import { Link } from "react-router-dom";

const LoginMeny = () => {
    

  return (

    <nav className="login-menu">
      <div>
          <p className="logo">RunWithUs</p>
      </div>
      <div className="account-buttons">
          <Link className="loginBtn" to="/LoginForm">Logga in</Link>
          <Link className="createAccountBtn" to="/RegisterForm">Skapa konto</Link>
      </div>
    </nav>
  );
};

export default LoginMeny;