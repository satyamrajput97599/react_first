import React from 'react';
import { useState,useEffect } from 'react';
function API()
{
  var[mydata,setMydata]=useState([]);
    function getdata()
    {
      fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json().then(data=>
      {
        console.log(data)
        setMydata(data)
      }))
    }useEffect(()=>
    {
      getdata();
    },[])
    return(
      <div><center><h1>This is API Component</h1></center>
        <hr/>
        <div className='row'>
          <div className='col-md-3'></div>

          <div className='col-md-6'>
            <table className='table table-bordred table-striped table-hover table-dark'>
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>UserName</td>
                  <td>Email</td>
                  <td>Phone</td>
                </tr>
                {
                  mydata.map(row=>
                    <tr>
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.username}</td>
                      <td>{row.email}</td>
                      <td>{row.phone}</td>
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
export default API;