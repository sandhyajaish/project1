import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Signin.css";
import axios from 'axios';

const Signin = () => { 
const[email , setemail]=useState('');
const[password, setpassword]=useState('');

function save(e){
  e.preventDefault()
  // console.warn(id,title,author); 
  console.log("ok");
  var data = JSON.stringify({
    "email": email,
    "password": password
  });
  
  var config = {
    method: 'post',
    url: 'localhost:5000/signin',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWNmZGQ4NDA1YWFlMTE1MzdiYjEwNjciLCJpYXQiOjE2NDEwMTI2NDN9.qdUUorZlRw-GNojCNslIV4BJgRS0XAWz5ps5rT1oknA', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  // console.log(data);
  
  axios( config )
    .then(res => {  
      console.log(res);
      console.log(res.data);
    })

}

  return (
    <div>
      <div class="wrapper">
        <h2>Signin Form </h2>
        <form onSubmit={save}>
          <div class="input-box">
            <input  onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Enter your email" required />
          </div>
          <div class="input-box">
            <input   onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="password" required />
          </div>
          {/* <div class="input-box">
                <input type="password" placeholder="Confirm password" required/>
            </div> */}
          <div class="policy">
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div class="input-box button">
            <button    type="Submit"  >Submit</button>
          </div>
          <div class="text">
            <h3>
              {" "}
              account? <Link to='/Signup' href="#">signup </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin; 
