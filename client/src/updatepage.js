import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
export function Update() {
    var { id } = useParams()
    const [sname, setSname] = useState('')
    const [hour, setHour] = useState('')
    const [price, setPrice] = useState('')
    useEffect(() => {
        fetch("http://localhost:3003/getupdate/" + id)
            .then(res => res.json())
            .then((data) => {
               alert(data[0].hour)
                setSname(data[0].sname)
                setHour(data[0].hour)
                setPrice(data[0].price)
            })
        },[])
        function handleupdate(event) {
            event.preventDefault()
            var sname = document.getElementById("sname").value
            var hour = document.getElementById("hour").value
            var price = document.getElementById("price").value
            var key = {
                sname: sname,
                hour:hour,
                price: price
            }        
            if(sname== '') {
                alert("enter the sname")
            }
            else if (hour == '') {
                alert("enter the hour")
            } 
            else if (price == '') {
                alert("enter the price")
            }  
            else {
                axios.put("http://localhost:3003/update/"+id, key)
                    .then((res) => {
                        if (res.data.status === "error") {
                            alert("data not inserted")
                            window.location.reload()
                        }
                        else if (res.data.status === "success") {
                            alert("data are inserted")
                           
                        }
                    });
            
        
                }
            }  
            return(

                <>
                <div className="container text-center text-success">
                        <h2>Update</h2>
                        <form onSubmit={handleupdate}>
                            <div class="form-floating text-success">
                                <select class="form-select" id="sname"  value={sname}  onChange={(up) => setSname(up.target.value)} aria-label="Floating label select example">
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
                            <input type="text" class="form-control" id="hour"  value={hour}  onChange={(up) => setHour(up.target.value)} placeholder="hour" />
                            <label for="floatingNumber">hour</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="price"  value={price} onChange={(up) => setPrice(up.target.value)}  placeholder="price" />
                                <label for="floatingNumber">price</label>
                            </div>
                           
                            
                         <input type="submit" class="btn btn-success" value="submit"/>
                        </form>
                    </div>
                </>
            );
        }  