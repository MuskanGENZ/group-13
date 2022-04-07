import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
   
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
        <div class="container-fluid ">
          <Link class="navbar-brand" to="#">FIT ME</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse" id="navbarsExample03">
           
            <ul class="navbar-nav m-auto mb-2 mb-sm-0">
              <li class="btn text-white">
                <Link class="text-white " aria-current="page" to="/">HOME</Link>
              </li>
              <li class="btn text-white ">
                <Link class=" text-white" to="/Bmi">BMI</Link>
              </li>
              <li class="btn text-white ">
                <Link class="text-white" to="/Product">PRODUCT</Link>
              </li>
              <li class="btn text-white ">
                <Link class="text-white " to="/Diet">DIET</Link>
              </li>
              
              <li class="nav-item dropdown text-white text-center">
                <Link class="nav-link dropdown-toggle text-white " href="/" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">YOGA</Link>
                <ul class="dropdown-menu " aria-labelledby="dropdown03">
                  <li><Link class="dropdown-item text-center" to="/Surya">Surya Namaskar</Link></li>
                  <li><Link class="dropdown-item text-center" to="/Beginners">what beginners should..</Link></li>
                  
                </ul>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
        
      )
    }
    
export default Header


