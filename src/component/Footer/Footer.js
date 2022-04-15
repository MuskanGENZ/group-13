import React from "react"
import { Link } from "gatsby"
const Footer = () => {
    return (
      <>
      <div class="container" style={{marginTop: "70px"}}>
        <div class="container">
          <footer class="py-3 my-4" >
            <ul class="nav justify-content-center border-bottom pb-3 mb-3" >
              <li class="nav-item">
              <Link className="text-white  nav-link px-2 text-muted" id="foter" aria-current="page" to="/">Home</Link> 
              </li>
              <li class="nav-item">
              <Link className=" text-white  nav-link px-2 text-muted"id="foter" to="/Bmi">BMI</Link>
              </li>
              <li class="nav-item">
              <Link className="text-white text-decoration-none nav-link px-2 text-muted"id="foter" to="/Product">Product</Link>
              </li>
              <li class="nav-item">
              <Link className="text-white text-decoration-none nav-link px-2 text-muted"id="foter" to="/Diet">Diet</Link>
              </li>
              <li class="nav-item">
              <Link className="text-white text-decoration-none nav-link px-2 text-muted"id="foter" to="/Scdh">Schedule</Link>
              </li>
              <li class="nav-item">
              <Link className="text-white text-decoration-none nav-link px-2 text-muted"id="foter" to="/Yoga">Yoga</Link>
              </li>
              <li class="nav-item">
              <Link className="text-white text-decoration-none nav-link px-2 text-muted"id="foter" to="/Feedback">Feedback</Link>
              </li>
            </ul>
            <p class="text-center text-muted">&copy; 2022 Yogmaya, Inc</p>
          </footer>
        </div>
      </div>
    </>
      )
    }
    
    export default Footer