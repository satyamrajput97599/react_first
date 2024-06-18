import { React } from "react";
function Opr()
{
    function getAdd()
    {
        var a=parseInt(document.getElementById("f").value);
        var b=parseInt(document.getElementById("s").value);
        var c=a+b;
        document.getElementById("t").value=c;
    }
    function getSub()
    {
        var a=parseInt(document.getElementById("f").value);
        var b=parseInt(document.getElementById("s").value);
        var c=a-b;
        document.getElementById("t").value=c;
    }
    function getMul()
    {
        var a=parseInt(document.getElementById("f").value);
        var b=parseInt(document.getElementById("s").value);
        var c=a*b;
        document.getElementById("t").value=c;
    }
    function getDiv()
    {
        var a=parseInt(document.getElementById("f").value);
        var b=parseInt(document.getElementById("s").value);
        var c=a/b;
        document.getElementById("t").value=c;
    }

    return(
        <div><center><h1>This is Operation Component</h1></center>
          <hr/>
          <br/><br/>
          <div className="row">
            <div className="col-md-4">
                Enter First Number
                <input type="text" className="form-control" id="f"/><br/>
                ENter Second Number
                <input type="text" className="form-control" id="s"/><br/>
                Result
                <input type="text" className="form-control" id="t"/><br/>
                <br/><br/>

                <button className="btn btn-success" onClick={()=>getAdd()}>Add</button>
                &emsp; &emsp; &emsp;
                <button className="btn btn-danger" onClick={()=>getSub()}>Sub</button>
                &emsp; &emsp; &emsp;
                <button className="btn btn-dark" onClick={()=>getMul()}>Mul</button>
                &emsp; &emsp; &emsp;
                <button className="btn btn-primary" onClick={()=>getDiv()}>Div</button>
                &emsp; &emsp; &emsp;
                
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
    )
}
export default Opr;