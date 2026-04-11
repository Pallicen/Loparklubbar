


const LoginForm = () => {
  return (
    <div className="loginPage">

      <div className="loginform">

        <div className="loginTitle">
            <h1>Logga in</h1>
        </div>

        <div className="loginInputs">
          <label>Användarnamn</label>
          <input type="text" className="username"></input>
          <label>Lösenord</label>
          <input type="password" className="password"></input>
        </div>

        <div className="loginFormBtn">
            <button className="loginBtn">Logga in</button>
        </div>

        <div className="loginFormP">
            <p>Saknar du konto? Registrera ett konto </p> 
            <a href="./RegisterForm">HÄR</a>
        </div>

      </div>

    </div>


)};

export default LoginForm;