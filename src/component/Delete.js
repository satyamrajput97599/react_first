import axios from "axios";
import { React,useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
function Delete()
{
    var {id}=useParams();
    var navigate=useNavigate()
    var getdlt=async()=>
    { 
        var result=axios.post(`http://localhost:3000/student/${id}`)
        alert("record Delete")
        navigate("/fpi1")
    }

    getdlt();
    return(
        <div><center><h1 style={{"background":"red","height":"70px"}}>Delete Record Student</h1></center>
        <hr/>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-3"><br/><br/>
                Enter Your Id Delete
                <input type="text" className="form-control"/>
                <br/>

                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
        </div>
    )
}
export default Delete;