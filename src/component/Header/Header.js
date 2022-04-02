import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
    <div class="container-fluid">
      <Link class="navbar-brand" to="#">FIT ME</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
       
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="btn text-light text-decoration-none">
            <Link class="text-light text-decoration-none" aria-current="page" to="/">Home</Link>
          </li>
          <li class="btn text-light text-decoration-none">
            <Link class="text-light text-decoration-none" to="/Bmi">BMI</Link>
          </li>
          <li class="btn text-light text-decoration-none">
            <Link class="text-light text-decoration-none" to="/Product">Product</Link>
          </li>
          <li class="btn text-light text-decoration-none dropdown">
            <a class="text-light text-decoration-none dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Specialities</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown03">
              <li><a class="dropdown-item" href="#">YOGA</a></li>
              <li><a class="dropdown-item" href="#">AEROBICS</a></li>
              <li><a class="dropdown-item" href="#">GYM</a></li>
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
    
  )
}

export default Header