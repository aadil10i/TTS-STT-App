import { useState } from 'react';
// import { signIn } from '../components/Auth/firebase';
import '../styles/login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signIn(email, password);
      onLogin();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="card-front">
        <div className="center-wrap">
          <h4 className="mb-4 pb-3 text-2xl">Log In</h4>
          <form id="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="logemail"
                className="form-style"
                placeholder="Your Email"
                id="logemail"
                autoComplete="off"
                value={email}
                onChange={handleEmailChange}
              />
              <i className="input-icon uil uil-at"></i>
            </div>

            <div className="form-group mt-2">
              <input
                type="password"
                name="logpass"
                className="form-style"
                placeholder="Your Password"
                id="logpass"
                autoComplete="off"
                value={password}
                onChange={handlePasswordChange}
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit btn mt-4" className="btn mt-4">
              submit
            </button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
