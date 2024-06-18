import {React, useState} from "react";
function Calculater(){

var a;
var ch;

function getopr(s)
{
a=parseInt(document.getElementById("c").value);
document.getElementById("c").value="";
ch=s;
}
  
function getres(){
  var b=parseInt(document.getElementById("c").value);
  var c=0;
  if(ch=='+')
  c=a+b;
  if(ch=='-')
  c=a-b;
  if(ch=='/')
  c=a/b;
  if(ch=='*')
  c=a*b;
  document.getElementById("c").value=c;

}

  function getdata(s){
document.getElementById("c").value+=s;
  }
  
  function clear()
  {
    document.getElementById("c").value="";
  }

return(

  <div>
    <center><h1 >Calculater</h1></center>
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-3" >
        <table className="table table-bordered table-striped">
          <tbody>
            <tr><td><input type="text" className="form-control" id="c"></input></td>
               <td><button className="btn btn-success" id="clear" onClick={()=>clear()}>Cls</button></td>
            </tr>

<tr>
  <td><button className="btn btn-primary btn-lg" onClick={()=>getdata('7')}>7</button>&emsp;&emsp;&emsp;
  <button className="btn btn-primary btn-lg" onClick={()=>getdata('8')}>8</button>&emsp;&emsp;&emsp;
  <button className="btn btn-primary btn-lg" onClick={()=>getdata('9')}>9</button></td>
  <td><button className="btn btn-primary btn-lg"onClick={()=>getopr('+')}>+</button></td> 
  </tr>            

  <tr>
  <td><button className="btn btn-primary btn-lg" onClick={()=>getdata('4')}>4</button>&emsp;&emsp;&emsp;
  <button className="btn btn-primary btn-lg" onClick={()=>getdata('5')}>5</button>&emsp;&emsp;&emsp;
  <button className="btn btn-primary btn-lg" onClick={()=>getdata('6')}>6</button></td>
  <td><button className="btn btn-primary btn-lg"onClick={()=>getopr('-')}>-</button></td> 
  </tr>            

  <tr>
  <td><button className="btn btn-primary btn-lg" onClick={()=>getdata('1')}>1</button>&emsp;&emsp;&emsp;
  <button className="btn btn-primary btn-lg" onClick={()=>getdata('2')}>2</button>&emsp;&emsp;&emsp;
  <button className="btn btn-primary btn-lg" onClick={()=>getdata('3')}>3</button></td>
  <td><button className="btn btn-primary btn-lg"onClick={()=>getopr('/')}>/</button></td> 
  </tr>            

  <tr>
  <td><button className="btn btn-primary btn-lg" onClick={()=>getdata('.')}>.</button>&emsp;&emsp;&emsp;
  <button className="btn btn-primary btn-lg" onClick={()=>getdata('0')}>0</button>&emsp;&emsp;&emsp;
  <button className="btn btn-primary btn-lg"onClick={()=>getres()}>=</button></td>
  <td><button className="btn btn-primary btn-lg"onClick={()=>getopr('*')}>*</button></td> 
  </tr>            



          </tbody>
        </table>
      </div>
    </div>
  </div>
)
}
export default Calculater;