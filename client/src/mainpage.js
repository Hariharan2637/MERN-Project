import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function Mainpage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3003/getdata")
            .then(res => res.json())
            .then(data => setData(data));
    });
    function del(id){
        var key={id:id}
        axios.post("http://localhost:3003/delete/"+id,key)
        .then((res) =>{
            if(res.data.status==="error"){
                alert("data are not deleted")
            }
            else if(res.data.status==="success"){
                alert("data are deleted")
            }
        })
    }
    return (
        <>
            <h1>Display</h1>
                <Link to="/service"><input type="submit" class="btn btn-success" value="Add Service" /></Link>
            <div className=" container-fluid row">

            
            {
                data.map((value, index) => (
                    <>
                       <div className="card col-lg-4">
                        <div className="card-body">

                        <h1>{value.sname}</h1>
                        <h2>{value.price}</h2>
                        <Link to={`/update/${value.id}`}><button className="btn btn-success">Update</button></Link>
                       <button className="btn btn-danger" onClick={()=>{del(value.id)}}>delete</button>
                        </div>
                       </div>

                    </>
                ))
            }
            </div>
        </>
    );
}

