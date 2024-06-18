import axios from "axios";
import Reat from "react";
import { useState,useEffect } from "react";
function Data1()
{
    var [mydata,setMydata]=useState([]);
    var getdata=async ()=>
    {
        var res=await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log("Showing data");
        console.log(res.data)
    }
    useEffect(()=>{getdata();},[])
    return(
        <div><center><h1>This Is Data API 3 Component</h1></center>
          <hr/>
        </div>
    );
}
export default Data1;