import React from "react"
import { Link } from "gatsby"
import { ContactPhone, Home, SelfImprovement } from "@mui/icons-material"
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
const Header = () => {
  return (
   
        <nav className="navbar navbar-expand-sm navbar-white sticky-top shadow-lg" aria-label="Third navbar example" id="navm">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white" to="#"><SelfImprovement fontSize="large"></SelfImprovement>  YOGMAYA</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "> </span>
           
          </button>
    
          <div className="collapse navbar-collapse" id="navbarsExample03">
           
            <ul className="navbar-nav m-auto mb-2 mb-sm-0 ">
              <li className="btn text-white  ">
                <Link className="text-white text-decoration-none fs-5" id="zxc" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="btn text-white ">
                <Link className=" text-white text-decoration-none fs-5"id="zxc" to="/Bmi">BMI</Link>
              </li>
              <li className="btn text-white ">
                <Link className="text-white text-decoration-none fs-5"id="zxc" to="/Product">PRODUCT</Link>
              </li>
              <li className="btn text-white ">
                <Link className="text-white text-decoration-none fs-5"id="zxc" to="/Diet">DIET</Link>
              </li>
              <li className="btn text-white ">
                <Link className="text-white text-decoration-none fs-5"id="zxc" to="/Scdh">SCHEDULE</Link>
              </li>
              <li className="btn text-white ">
                <Link className="text-white text-decoration-none fs-5"id="zxc" to="/Yoga">YOGA</Link>
              </li>
              <li className="btn text-white ">
                <Link className="text-white text-decoration-none fs-5"id="zxc" to="/Contact">CONTACT</Link>
              </li>
           
              </ul>
              <div  class="text-end  ">
                <ul class="text-end mb-2 mb-sm-0" >
                  
              <li className="btn text-white text-center">
                <Link className="text-white text-decoration-none fs-5  text-center"id="zxc" to="/Feedback"><ContactPhone/> Feedback</Link>
              </li>
              </ul>
              </div>
              
          </div>
        </div>
      </nav>
        
      )
    }
    
export default Header




