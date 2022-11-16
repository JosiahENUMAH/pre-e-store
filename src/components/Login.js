import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")

  const navigate= useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      navigate.push("./")
    }
  }, [])

 async function login(){
  let item = {email, password}
    console.log(item)
    
    let result = await fetch(``, {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },body: JSON.stringify(item)
    })
    result = await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate.push("/")
  }

  return (
    <div className="col-sm-6 offset-sm-3 bg-light">
      <form className="login-form">
      < div class="mb-3">
    <label for="exampleFormControlInput1" 
        class="form-label">Email address</label>
        <input type="email" 
        class="form-control" 
        // id="exampleFormControlInput1" 
        placeholder="name@example.com"
        onChange={(e)=>setEmail(e.target.value)}/>

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            // id="inputPassowrd"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked
          />
          <label className="form-check-label" for="exampleCheck1">
            Remember me
          </label>
        </div>
        <button  className="btn btn-success offset-sm-5"
        onClick={login}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;