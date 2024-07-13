import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Loginpage = () => {

const [loginData, setLoginData] = useState({
  username:'',
  password: '',
})

//submit function
  const handleLoginSubmit = async(e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:8000/login', loginData);
      const {success, message} = response.data;

      if(success){
        console.log('Login Succesfully');
      }
      else{
        console.log(message);
      }

    }
    catch(error){
      console.error('Login error',error);
    }
    setLoginData({
      username:'',
      password:'',
    })
  };

  const handleLoginChange = (e) => {
    const {name, value} = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleLoginChange}
          value={loginData.username}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleLoginChange}
          value={loginData.password}
          required
        />
        <button type="submit">Login</button>
        <p>
          Not Registered yet? <Link to='/registration'>Register Here</Link>
        </p>
      </form>
    </div>
  );
};

export default Loginpage;
