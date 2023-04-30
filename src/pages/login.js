import "./../styles/css/login-register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(" http://127.0.0.1:5000/users/login", {
      method: "POST",
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const { token } = await response.json();
      onLogin(token);
      navigate("/dashboard");
    } else {
      
      setError("Nom d'utilisateur ou mot de passe erroné");
    }
  };

  return (
    <section className="specialbody forms">
      <div className="container">
        <div className="forms-grid">
          <div className="login">
            <span className="fas fa-sign-in-alt"></span>
            <strong>Bienvenue!</strong>
            <span>Connectez vous à votre compte</span>

            <form onSubmit={handleSubmit} className="login-form">
              <fieldset>
                <div className="form">
                  <div className="form-row">
                    <span className="fas fa-user"></span>
                    <label className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-text"
                    />
                  </div>
                  <div className="form-row">
                    <span className="fas fa-eye"></span>
                    <label className="form-label">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-text"
                    />
                  </div>
                  <div className="form-row bottom">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="remenber"
                        name="remenber"
                        value="remenber"
                      />
                      <label > remember me?</label>
                    </div>
                    <a href="#url" className="forgot">
                      forgot password?
                    </a>
                  </div>
                  <div className="form-row button-login">
                    <button type="submit" className="btn btn-login">
                      Login <span className="fas fa-arrow-right"></span>
                    </button>
                    {error && <div className="error">{error}</div>}
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
