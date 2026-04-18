import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/context";

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
    <div className="loginPage">
      <div className="loginform">
        <div className="loginTitle">
          <h1>Logga in</h1>
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
              autoComplete="current-password"
            />
          </div>

          <div className="loginFormBtn">
            <button className="loginBtn" type="submit">
              Logga in
            </button>
          </div>

          {message && <p className="authMessage">{message}</p>}
        </form>

        <div className="loginFormP">
          <p>Saknar du konto? Registrera ett konto </p>
          <Link to="/RegisterForm">HÄR</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;