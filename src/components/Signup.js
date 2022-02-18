import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Sign.css";

const Signin = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

//   function save(){
//     // console.warn(id,title,author); 
//     const data={name,email,password}
//     console.log(data);
    
//     axios.post(`http://localhost:5000/signup`,  data )
//       .then(res => {  
//         console.log(res);
//         console.log(res.data);
//       })

// } 
function save(){
  // console.warn(id,title,author); 
  const data={email , password}
  fetch('http://localhost:5000/signup' ,{
      'method': "POST",
      headers : {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'

      },
      body:JSON.stringify(data)
  }).then((result)=>{
      console.log("result : ",result);
      console.warn(result);
  })

}
  return (
    <div>  
      <div class="wrapper">
        <h2>Signup Form </h2>  
        <form action="#">
          <div class="input-box">
            <input
              value={name}
              type="text"
              onChange={(e) => {
                setname(e.target.value);
              }}
              placeholder="Enter your Name"
              required
            />
          </div>
          <div class="input-box">
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              type="text"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="input-box">
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              placeholder=" Enter password"
              required
            />
          </div>
          {/* <div class="input-box">
                <input type="password" placeholder="Confirm password" required/>
            </div> */}
          <div class="policy">
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div class="input-box button">
            <input onClick={save} type="Submit" value="Signup Now" />
          </div>
          <div class="text">
            <h3>
              {" "}
              already have a account?{" "}
              <Link to="/Signin" href="#">
                signin{" "}
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
