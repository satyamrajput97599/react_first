import axios from "axios";
import React,{useEffect, useState,} from "react";
import { Link } from "react-router-dom";
function Show()
{
    var [mydata,setMydata]=useState([])
    var getdata=async()=>
    {
        var res=await axios.get("http://localhost:3000/student")
        console.log(res.data);
        setMydata(res.data)
    }
    useEffect(()=>
    {
        getdata()
    },[])

    var dData=async(id)=>
    {
        await axios.delete(`http://localhost:3000/student/${id}`)
        alert("Record Delete")
        getdata()
    }
    return(
        <div>
            <center><h1>Getting Data From Json-Server</h1></center><hr/>
            <br/><br/>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <Link className="btn btn-success" to="/insert">Add Record</Link><br/><br/>
                    <table className="table table-bordered table-striped table-hover table-dark">
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Course</td>
                                <td>Action</td>
                            </tr>
                            {
                                mydata.map(row=>
                                    <tr>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.course}</td>
                                        <td>
                                            {/*<Link className="btn btn-danger" to={`/delete/${row.id}`}>Delete</Link>*/}
                                            <button className="btn btn-danger" onClick={()=>dData(row.id)}>Delete</button>
                                            &emsp;
                                            <Link className="btn btn-warning" to="/edit">Edit</Link>
                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Show;