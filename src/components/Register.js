import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"


function Register() {
  const navigate = useNavigate()
const [ first_name, setFirstName ] = useState("")
const [ last_name, setLastName ] = useState("")
const [ userName, setUserName ] = useState("")
const [ email, setEamil ] = useState("")
const [ password, setPassword ] = useState("")
const [ confirmPassword, setConfirmPassword ] = useState("")


  async function submit(){
    let item = {first_name, last_name, userName, email, password, confirmPassword}
    console.log(item)

    let result = await fetch(``, {
      method: `POST`,
      body:JSON.stringify(item),
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    result = await result.json()
    // console.log("result", result)

    localStorage.setItem("user-info", JSON.stringify(result))
    navigate.push("/login")


  }

  return (
    <div  className="card bg-light">
      <div className="col-sm-6 offset-sm-3" >
        
          <div className="mb-3">
            <label for="first_name" className="form-label">
              First Name
            </label>
            <input
            value={first_name}
              type="text"
              className="form-control mb-3"
              id="first_name"
              placeholder="First Name"
              aria-describedby="first_name"
              onChange={(e)=>setFirstName(e.target.value)}
            />
            <label for="last_name" className="form-label">
               Last Name
            </label>
            <input
            value={last_name}
              type="last_name"
              className="form-control mb-3"
              id="last_name"
              placeholder="Last Name"
              aria-describedby="last_name"
              onChange={(e)=>setLastName(e.target.value)}
            />
            <label for="userName" className="form-label">
               User Name
            </label>
            <input
            value={userName}
              type="userName"
              className="form-control mb-3"
              id="userName"
              placeholder="User Name"
              aria-describedby="userName"
              required
              onChange={(e)=>setUserName(e.target.value)}
            />
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
            value={email}
              type="email"
              className="form-control"
              placeholder="Email Address"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=>setEamil(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
            value={password}
              type="password"
              required
              className="form-control mb-3"
              placeholder="password"
              id="exampleInputPassword1"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <label for="exampleConfirmtPassword1" className="form-label">
              Confirm Password
            </label>
            <input
            value={confirmPassword}
              type="confirm-password"
              className="form-control"
              placeholder="Confirm Password"
              id="exampleConfirmPassword1"
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">
              <Link className="nav-link" to="/login">Login once registered </Link>
            </label>
          </div>
          <button type="submit" 
            className="btn btn-success offset-sm-5"
            onClick={submit}>
            Submit
          </button>
      </div>
    </div>
  );
}

export default Register;