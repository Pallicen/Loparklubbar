import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/context";
import logIMG from '../assets/Run.png'

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    const res = login(username, password);
    if (!res.ok) {
      setMessage(res.error);
      return;
    }
    navigate("/");
  }

  return (
    <div className="registerPage">

      <nav className="login-menu">

      <div className="nav-left">
        <img className="log" src={logIMG} alt="logga"></img>
      </div>

      <div className="nav-right">
          <Link className="loginBtn" to="/RegisterForm">
          Skapa konto
        </Link>

      </div>
      </nav>

      <div className="registerContainer">

        <div className="registerIntro">
          <h1>Välkommen</h1>
          <p>
            Logga in för att hantera din löparklubb, skapa events och hitta nya löpare.
          </p>
        </div>


        <div className="registerCard">
          <form onSubmit={onSubmit}>

            <div className="formGroup">
              <label>E-post</label>
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <div className="formGroup">
              <label>Lösenord</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            <button className="createAccountBtn" type="submit">
              Logga in
            </button>

            {message && <p className="authMessage">{message}</p>}

            <div className="switchAuth">
              <p>Saknar du konto?</p>
              <Link to="/RegisterForm">Registrera dig</Link>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;