import {React, useState} from "react";
function Opr1()
{
    var [a,setA]=useState();
    var [b,setB]=useState();
    var [c,setC]=useState();
    var [d,setD]=useState();
    var [e,setE]=useState();
    var [f,setF]=useState();

    function getOpr()
    {
        setC(parseInt(a)+parseInt(b))
        setD(parseInt(a)-parseInt(b))
        setE(parseInt(a)*parseInt(b))
        setF(parseInt(a)/parseInt(b))
       
    }
    return(
        <div><center><h1>This is Operation Component</h1></center>
           <hr/>
           <br/><br/>
           <div className="row">
              <div className="col-md-4"></div>
                <div className="col-md-4">
                    Enter First Number
                    <input type="text" className="form-control" onInput={(e)=>setA(e.target.value)}/><br/>
                    Enter Second Number
                    <input type="text" className="form-control" onInput={(e)=>setB(e.target.value)}/><br/>

                    <br/><br/>
                    <button className="btn btn-success" onClick={()=>getOpr()}>Operation</button>
                </div>
                <div className="col-md-3">
                    {/* First Number={a}<br/>
                    Second Number={b}<br/>
                    Add= {c}<br/>
                    sub= {d}<br/>
                    Mul= {e}<br/>
                    Div= {f}<br/>*/}

                    <table className="table table-bordered table-striped table-hover table-dark">
                        <tbody>
                            <tr>
                                <td>{a}</td>
                                <td>+</td>
                                <td>{b}</td>
                                <td>=</td>
                                <td>{c}</td>
                            </tr>

                            <tr>
                                <td>{a}</td>
                                <td>-</td>
                                <td>{b}</td>
                                <td>=</td>
                                <td>{d}</td>
                            </tr>

                            <tr>
                                <td>{a}</td>
                                <td>*</td>
                                <td>{b}</td>
                                <td>=</td>
                                <td>{e}</td>
                            </tr>

                            <tr>
                                <td>{a}</td>
                                <td>/</td>
                                <td>{b}</td>
                                <td>=</td>
                                <td>{f}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
             </div>
        </div>
    )
}
export default Opr1;