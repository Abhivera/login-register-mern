import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleLoginChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login',user);
      const {success,message} = response.data;
      if (success){
        console.log("Login Successfully")
      }
      else{ console.log(message)}
    } 
    catch (err) {
        console.log("login error",err)
    }
    setUser({username:"",password:""})
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleLoginChange}
          value={user.name}
          required
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleLoginChange}
          required
        />
        <button type="submit">Submit</button>
        <p>
          Not Register Yet <Link to="/register">Register Here</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
