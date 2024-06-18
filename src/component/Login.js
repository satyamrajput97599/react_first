import axios from "axios";
import React, {useState} from "react";
function Login()
{
    var [un,setUn]=useState()
    var [pn,setPn]=useState()
    var [msg,setMsg]=useState()

    var getLogin=async()=>
    {
        var res=await axios.get("http://localhost:3000/uinfo")
        var dt=res.data.filter(item=>item.uName==un && item.Pass==pn)
        if(dt.length>0)
        setMsg("Login Was Succefully");
        else
        setMsg("Invalid Username Or Password")
    }
    return(
        <div><center><h1 style={{"background":"Gold","height":"70px"}}>This Is Login component</h1></center>
        <hr/>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-3" style={{"border":"2px solid black","background" : "skyblue"}}>
                 User Name
                 <input type="text" className="form-control" onInput={(e)=>setUn(e.target.value)}/>
                 <br/>

                 Password
                 <input type="text" className="form-control" onInput={(e)=>setPn(e.target.value)}/>
                 <br/>

                 <center><button className="btn btn-danger" onClick={()=>getLogin()}>Login</button></center>
                 <br/><br/>
                 <h3>{msg}</h3>
                 </div>
        </div>
        </div>
    )
}
export default Login;