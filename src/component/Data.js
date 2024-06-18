import { React } from "react";
function Data()
{
    var data=[
        {"id":101,"name":"a","course":"mca"},
        {"id":102,"name":"b","course":"mca"},
        {"id":103,"name":"c","course":"mca"},
        {"id":104,"name":"d","course":"mca"},
        {"id":105,"name":"e","course":"mca"},
    ]
    return(
        <div><center><h1>This is Data component</h1></center>
           <hr/>
           <br/><br/>
           <div className="row">
             <div className="=col-md-2"></div>
             <div className="=col-md-5">
                <button className="btn btn-success">Add Record</button><br/><br/>
                <table className="table table-bordered table-striped table-hover table-dark">
                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Course</td>
                            <td>Action</td>
                        </tr>
                        {
                            data.map(record=>
                            <tr>
                                <td>{record.id}</td>
                                <td>{record.name}</td>
                                <td>{record.course}</td>
                                
                            <td>
                                <button className="btn btn-danger">Delete</button>
                                &emsp;
                                <button className="bnt btn-warning">Edit</button>
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
export default Data;