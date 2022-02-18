import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      {/* <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <Link to='/Sort' class="navbar-brand" href="/">
            {" "}
            Ascending{" "}
          </Link> 
          <a class="navbar-brand" href="/">
            {" "}
            Decending{" "}
          </a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav> */}  
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{color: "white"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Family Tree</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to='./Sort' class="nav-link active" aria-current="page" href="#">Ascending</Link> 
        <Link to='./Sorts' class='nav-link active' > Data of Tree </Link>
        {/* <a class="nav-link" href="#">Features</a> */}
        {/* <a class="nav-link" href="#">Pricing</a> */}
        {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">sorted Data</a> */}
      </div>
    </div> 
    {/* <h1 style={{textAlign: "center"}}> Family Tree</h1> */}
  </div> 
</nav>
      <h1 style={{textAlign: "center"}}> Family Tree</h1> 
    </div>
  );
};

export default Nav;
