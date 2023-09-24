import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export function Service() {
    function handleService(event) {
        event.preventDefault()
    var sname=document.getElementById("sname").value
    var hour=document.getElementById("hour").value
    var price=document.getElementById("price").value
    alert(price)
    
    var key={
        sname:sname,
        hour:hour,
        price:price
    }
    if(sname==''){
        alert("enter the sname")
    }
    else if(hour==''){
        alert("enter the hour")
    }
    else if(price==''){
        alert("enter the price")
    }
    else {
        axios.post("http://localhost:3003/Service", key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data not inserted")
                    
                }
                else if (res.data.status === "success") {
                    alert("data are inserted");
                    window.location.href='/Mainpage'
                
                }
            })
    }
    }
    return(

        <>
        <div className="container text-center text-success">
                <h2>Add services</h2>
                <form onSubmit={handleService}>
                    <div class="form-floating text-success">
                        <select class="form-select" id="sname" aria-label="Floating label select example">
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
                    <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="hour" placeholder="hour" />
                    <label for="floatingNumber">hour</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="price" placeholder="price" />
                        <label for="floatingNumber">price</label>
                    </div>
                   
                    
                 <input type="submit" class="btn btn-success" value="submit"/>
                </form>
            </div>
        </>
    );
}