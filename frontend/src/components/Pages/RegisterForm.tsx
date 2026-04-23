import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/context";
import LoginMeny from "../LoginMeny";

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

      <div className="loginBtnRegisterForm">
       <div>
          <p className="logo">RunWithUs</p>
        </div>
        <Link className="loginBtn" to="/LoginForm">
          Logga in
        </Link>
      </div>

      <div className="registerform">
        <div className="registerTitle">
          <h1>Registrera konto</h1>
        </div>

        <div className="registerFormP">
          <p>För att lägga till din löparklubb och lopp behöver du skapa ett konto.</p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="loginInputs">
            <label>E-post</label>
            <input
              type="text"
              className="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />

            <label>Lösenord</label>
            <input
              type="password"
              className="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <div className="loginFormBtn">
            <button className="createAccountBtn" type="submit">
              Skapa konto
            </button>
          </div>

          {message && <p className="authMessage">{message}</p>}
        </form>
      </div>

    </div>
  );
};

export default RegisterForm;