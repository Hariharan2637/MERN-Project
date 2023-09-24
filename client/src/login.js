import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export function Login() {
    function handlelogin(event){
        event.preventDefault()
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        var key = {
            username:username,
            password:password
        }
        if(username==''){
            alert("plz enter the username")
        }
        else if(password==''){
            alert("plz enter the password")
        }
        else{
            axios.post("http://localhost:3003/Login",key)
            .then((res)=>{
                if(res.data.status==="empty_set"){
                    alert("plz enter the username or register a new one")
                }
                else if(res.data.status==="success"){
                  var id=res.data.dbid
                    alert("successfull Logedin")
                    window.location.href=`/Mainpage/${id}`
                }
                else if(res.data.status==="invalid_user"){
                    alert("plz check your password")
                }
                else if(res.data.status==="error"){
                    alert("all the data are invalid")
                }
                else{
                    alert("plz register your details first")
                }
            })
        }
    }
    return(

        <>
           <div className="container text-center text-success">
                <h2>Login</h2>
                <form onSubmit={handlelogin}>

                    <div class="form-floating mb-3">
                        <input type="firstname" class="form-control" id="username" placeholder="Firstname" />
                        <label for="floatingname">Username</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="password" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <Link to="/Mainpage"><input type="submit" class="btn btn-success" value="Login"/></Link>
                </form>
            </div>
        </>
    );
}