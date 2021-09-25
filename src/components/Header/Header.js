import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/meal db">Meal db</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
        <li className="nav-item ms-5">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link active" aria-current="page" href="/meal">Meal</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link active" aria-current="page" href="/favourite">Favourite</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
        </li>
        </ul>
      {/* <form className="d-flex mx-auto"> */}
        <input className="  w-50 form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-secondary text-white" type="submit">Search</button>
      {/* </form> */}
    </div>
  </div>
</nav>
        
        </div>
    );
};

export default Header;