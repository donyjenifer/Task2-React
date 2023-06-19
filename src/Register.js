import React,{useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState([{
    name: "",
    email: "",
    password: "",
  }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <div> <h2> Create an account </h2> 
   
    < form onSubmit = {handleSubmit}>
  <div className="form-outline mb-4">
  <input
  name="name"
  value={input.name}
  onChange={(e)=> 
    setInput({
  ...input,
 [e.target.name]:e.target.value,
  })
}
   type="text"
   id="formname"
   className="form-control form-control-lg"/>
   

<label className="form-label" htmlFor="formname">
    Your Name
   </label>
  </div>

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
    Your Email
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

<label className="form-Label" htmlFor="formpassword">
  Password
  </label>
  </div>

  <div className="d-flex justify-content-center">
    <button
      type="submit"
      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white">
        Register
    </button>
  </div>

{/* <p className="text-center text-mutd mt-5 mb-0"> */}
  Have already an account?
  <Link to="/login" className="fw-bold text-body">
    <u>Login here</u>
    </Link>
{/* </p> */}
</form >
</div>
  );
};
export default Register;