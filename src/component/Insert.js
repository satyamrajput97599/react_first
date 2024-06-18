import axios from "axios";
import { React,useState} from "react";
import { useNavigate } from "react-router-dom";
function Insert()
{
    var [n,setN]=useState();
    var [c,setC]=useState();
    var navigate=useNavigate()
    var insData=async()=>
    { 
        var data={"name":n, "course":c}
        var result=axios.post("http://localhost:3000/student",data)
        console.log(result)
        alert("record Saved")
        navigate("/fpi1")
    }
    return(
        <div><center><h1 style={{"background":"red","height":"70px"}}>Insert Your Data</h1></center>
        <hr/>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-3"><br/><br/>
                Enter name
                <input type="text" className="form-control" onInput={(e)=>setN(e.target.value)}/>
                <br/>
                Enter Course
                <input type="text" className="form-control" onInput={(e)=>setC(e.target.value)}/>
                <br/>

                <button className="btn btn-danger" onClick={()=>insData()}>Submit</button>
            </div>
        </div>
        </div>
    )
}
export default Insert;