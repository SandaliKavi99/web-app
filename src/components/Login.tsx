import { useAuth } from '../appContexts';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../css/login.css';
import { loginUser } from '../actoins/auth';


export default function Login() {

  const { isLoggedIn, login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validations
    if (!username.trim()) {
      setError('Username cannot be empty');
      return;
    }

    if (!password.trim()) {
      setError('Password cannot be empty');
      return;
    }

    const result = await loginUser(username, password);

    console.log(result);
    

    if (result?.message === 'success') {
      login({
        id: result.data.Id,
        name: result.data.Name,
        email: result.data.Email,
        token: result.data.Token
      })
    } else {
      setError(result?.message);
    }
  };

  if (isLoggedIn) return <Navigate to="/" />;

  return (
    <div>

      <section className="vh-100">
        <div className="container py-5 h-100">

          <div className="row d-flex align-items-center justify-content-center h-100">

            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid" alt="Phone"></img>
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleLogin}>
                {error && <div className="alert alert-danger" id="displayError">*** {error}</div>}

                <div className="form-outline mb-4">
                  <input type="email"
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setError(null); // Clear error when typing
                    }} className="form-control form-control-lg" />
                  <label className="form-label">Email</label>
                </div>


                <div className="form-outline mb-4">
                  <input type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(null); // Clear error when typing
                    }} className="form-control form-control-lg" />


                  <label className="form-label">Password</label>
                </div>




                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>



              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  );




}