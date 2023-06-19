import React from 'react'
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const userName=JSON.parse(localStorage.getItem("user"));
  
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <div>
      
 <h2 class="text-uppercase text-center mb-5"Homepage></h2>
 <p className="text-center">Welcome-{userName.name}</p>  
 
<button
onClick={handleLogout}
type="button"
class="btn btn-success btn-block btn-lg gradient-custom-4 text-body center">
  Logout
</button>
  </div>
  );
};

export default Home