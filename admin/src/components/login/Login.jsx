import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthContext';
import AuthServices from '../../services/AuthServices';
import './login.scss';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { token, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await AuthServices.login(credentials);
      console.log(res);
      if (res.data.user.role === 'ADMIN') {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: res.data.user,
          token: res.data.accessToken,
        });
        navigate('/');
      } else {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: { message: 'You are not allowed!' },
        });
      }
    } catch (err) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: { message: err.response.data.message },
      });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
