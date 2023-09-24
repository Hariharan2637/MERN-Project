import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export function Signup() {
    function handleSignup(event) {
        event.preventDefault()
    var fname=document.getElementById("fname").value
    var lname=document.getElementById("lname").value
    var email=document.getElementById("email").value
    var phone=document.getElementById("phone").value
    var category=document.getElementById("category").value
    alert(category)
    var city=document.getElementById("city").value
    var state=document.getElementById("state").value
    var password=document.getElementById("password").value
    

    var key={
    fname:fname,
    lname:lname,
    email:email,
    phone:phone,
    category:category,
    city:city,
    state:state,
    password:password

}
    if(fname==''){
        alert("enter the fname")
    }
    else if(lname==''){
        alert("enter the lname")
    }
    else if(email==''){
        alert("enter the email")
    }
    else if(phone==''){
        alert("enter the phone")
    }
    else if(category==''){
        alert("enter the category")
    }
    else if(city==''){
        alert("enter the city")
    }
    else if(state==''){
        alert("enter the state")
    }
    else if(password==''){
        alert("enter the password")
    }
    else {
        axios.post("http://localhost:3003/Signup", key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data not inserted")
                    window.location.reload()
                }
                else if (res.data.status === "success") {
                    alert("data are inserted");
                window.location.href='/login'
                }
            })
    }
    }
    return (
        <>
           
            <div className="container text-center text-success">
                <h2>Signup</h2>
                <form onSubmit={handleSignup}>

                    <div class="form-floating mb-3">
                        <input type="firstname" class="form-control" id="fname" placeholder="Firstname" />
                        <label for="floatingname">Firstname</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="lastname" class="form-control" id="lname" placeholder="Lastname" />
                        <label for="floatingName">Lastname</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="phone" placeholder="phone no" />
                        <label for="floatingNumber">MobileNo</label>
                    </div>
                    <div class="form-floating text-success">
                        <select class="form-select" id="category" aria-label="Floating label select example">
                            <option selected>Category</option>
                            <option value="Photography">Photography</option>
                            <option value="Promotion Shoot">Promotion Shoot</option>
                            <option value="Editing">Editing</option>
                            <option value="Branding">Branding</option>
                            <option value="Flyers">Flyers</option>
                            <option value="Social Media Banner">Social Media Banner</option>
                            <option value="Logo">Logo</option>
                            <option value="Script Writing">Script Writing</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                        <label for="floatingSelect">select</label>
                    </div>
                    <br/>
                    <div class="form-floating text-success">
                        <select class="form-select" id="city" aria-label="Floating label select example">
                            <option selected>City</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Hydeabad">Hydeabad</option>
                            <option value="Coimbatore">Coimbatore</option>
                        </select>
                        <label for="floatingSelect">select</label>
                    </div>
                    <br />
                    <div class="form-floating text-success">
                        <select class="form-select" id="state" aria-label="Floating label select example">
                            <option selected>State</option>
                            <option value="Tamilnadu">Tamilnadu</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Telangana">Telangana</option>

                        </select>
                        <label for="floatingSelect">select</label>
                    </div>
                    <br />
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="password" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <Link to="/Login"><input type="submit" class="btn btn-success" value="submit"/></Link>
                </form>
            </div>
        </>
    );
}