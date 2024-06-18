import { React } from "react";
import { useState,useEffect } from 'react';

function API2()
{
    var[mydata,setMydata]=useState([]);
    function getdata()
    {
        fetch("https://jsonplaceholder.typicode.com/photos").then(res=>res.json().then(data=>
        {
            console.log(data)
            setMydata(data)
        }))
    }
    getdata();
    return(
        <div><center><h1>This is API 2 Component</h1></center>
          <hr/>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="row">
                    {
                        mydata.map(row=>
                            <div className="col-md-6">
                                <div className="card" style={{"width":"18rem"}}>
                                    <img src={row.url} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-titel">{row.id}</h5>
                                        <p class="card-text">{row.titel}</p>
                                        <a href="#" class="btn btn-primary">Like</a>&emsp;
                                        <a href="#" class="btn btn-primary">Share</a>
                                        
                                    </div>
                                        
                                </div>
                                    
                            </div>
                            )
                    }
                </div>
            </div>
          </div>
        </div>
    )
}
export default API2;