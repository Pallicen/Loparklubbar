

const RegisterForm = () => {
  return (
        <div className="loginPage">

      <div className="loginform">
        <div className="loginTitle">
            <h1>Registrera konto</h1>
        </div>

        <div className="registerFormP">
            <p>För att lägga till din löparklubb och lopp behöver du skapa ett konto.</p>
        </div>

        <div className="loginInputs">
          <label>Användarnamn</label>
          <input type="text" className="username"></input>
          <label>Lösenord</label>
          <input type="password" className="password"></input>
        </div>

        <div className="loginFormBtn">
            <button className="createAccountBtn">Skapa konto</button>
        </div>

      </div>

    </div>
)};

export default RegisterForm;