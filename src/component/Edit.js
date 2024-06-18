import { React } from "react";
function Edit()
{
    return(
        <div><center><h1 style={{"background":"red","height":"70px"}}>This Is Edit component</h1></center>
        <hr/>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-3"><br/><br/>
                 Your Id
                 <input type="text" className="form-control"/>
                 <br/>

                 Edit Name
                 <input type="text" className="form-control"/>
                 <br/>

                 Edit Course
                 <input type="text" className="form-control"/>
                 <br/>

                 <button className="btn btn-danger">Edit</button>
                </div>
        </div>
        </div>
    )
}
export default Edit;