import { Link } from "react-router-dom";

const LoginMeny = () => {
    

  return (

    <nav className="login-menu">
      <div className="logodiv">
          <p className="logo">RunWithUs</p>
      </div>
      <div className="account-buttons">
          <Link className="createAccountBtn" to="/RegisterForm">Skapa konto</Link>
          <Link className="loginBtn" to="/LoginForm">Logga in</Link>
      </div>
    </nav>
  );
};

export default LoginMeny;