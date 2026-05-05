import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/context";

const RegisterForm = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    const res = register(username, password);
    if (!res.ok) {
      setMessage(res.error);
      return;
    }

    setMessage("Konto skapat! Logga in nu.");
    navigate("/LoginForm");
  }

  return (
  <div className="registerPage">

    <nav className="login-menu">

      <div className="nav-left">
        <p className="logo">RUNWITHUS</p>
      </div>

      <div className="nav-right">

        <Link className="loginBtn" to="/LoginForm">
          Logga in
        </Link>

      </div>

    </nav>


      <div className="registerContainer">

        <div className="registerIntro">
          <h1>Skapa konto</h1>
          <p>
            Skapa ett konto för att lägga till löparklubbar, event och hitta fler löpare i din stad.
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
                autoComplete="new-password"
                required
              />
            </div>

            <button className="createAccountBtn" type="submit">
              Skapa konto
            </button>

            {message && <p className="authMessage">{message}</p>}
          </form>
        </div>

      </div>
    </div>

  );
};

export default RegisterForm;