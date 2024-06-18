import React from "react";
import {Link} from "react-router-dom";
function Nav()
{
    return(
        <div>


  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">React</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
        
                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/data">Data</Link>
                            </li>

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/opr">Opr</Link>
                            </li>

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/student">Student</Link>
                            </li>
                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/Opr1">Opr1</Link>
                            </li>

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/Calculater">Calculater</Link>
                            </li>
                            
                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/API">API</Link>
                            </li>

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/API2">API2</Link>
                            </li>

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/api3">api3</Link>
                            </li>

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/fpi1">FApi1</Link>
                            </li>

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/Insert">Insert</Link>
                            </li>

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/Delete">Delete</Link>
                            </li>

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/Edit">Edit</Link>
                            </li>

                            <li class="nav-item">
                              <Link class="nav-link active" aria-current="page" to="/Login">Login</Link>
                            </li>

                        </ul>
                    </div>
        </div>
    </nav>
 </div>
    )

}
export default Nav;