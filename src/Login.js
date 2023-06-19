import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin =(e)=> {
    e.preventDefault();
    const loggeduser=JSON.parse(localStorage.getItem("user"));
    if(
      input.email===loggeduser.email && 
      input.password===loggeduser.password)
    {
      localStorage.setItem("loggedin",true)
      navigate("/");
    }
    else{
      alert("Wrong Email or Password");
    }
  };
  return (
    <div>
      <h2 className="text-uppercase text-center mb-5">Login</h2>
      
   <form onSubmit={handleLogin}>
      <div className="form-outline mb-4">
        <input 
         name="email"
         value={input.email}
         onChange={(e)=> 
           setInput({
         ...input,
        [e.target.name]:e.target.value,
         })
       }
        type="email"
        id="formemail"
        className="form-control form-control-lg"/>

       
<label className="form-label" htmlFor="formemail">
     Email
    </label>
  </div>

  <div className="form-outline mb-4">
    <input 
    name="password"
    value={input.password}
    onChange={(e)=> 
      setInput({
    ...input,
   [e.target.name]:e.target.value,
    })
  }
        type="password"
        id="formpassword"
        className="form-control form-control-lg"/>

   <label className="form-Label" 
  htmlFor="formpassword">
  Password
  </label>
  </div>

  
  <div className="d-flex justify-content-center">
    <button
      type="submit"
      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white">
        Login
      </button>
      </div>
      
      <p className="text-center text-muted mt-5 mb-0">
        Don't have an account?
        <Link to="/register" className="fw-bold text-body">
      <u>Register here</u>
      </Link>
      </p>
   </form>
    </div> 
  );
};
export default Login