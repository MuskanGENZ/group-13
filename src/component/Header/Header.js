import React from "react"
import { Link } from "gatsby"
import { Home } from "@mui/icons-material"

const Header = () => {
  return (
   
        <nav className="navbar navbar-expand-sm navbar-white sticky-top shadow-lg" aria-label="Third navbar example">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white" to="#">FIT ME</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "> </span>
            
          </button>
    
          <div className="collapse navbar-collapse" id="navbarsExample03">
           
            <ul className="navbar-nav m-auto mb-2 mb-sm-0 ">
              <li className="btn text-white">
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
              <li className="nav-item dropdown text-white text-center"id="zxc">
                <Link className="nav-link dropdown-toggle text-white fs-5" href="/" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">YOGA</Link>
                <ul className="dropdown-menu " aria-labelledby="dropdown03">
                  <li><Link className="dropdown-item text-center fs-6 text-dark" to="/Surya"id="zxc">Surya Namaskar</Link></li>
                  <li><Link className="dropdown-item text-center fs-6 text-dark" to="/Beginners"id="zxc">what beginners should..</Link></li>
                  <li><Link className="dropdown-item text-center fs-6 text-dark" to="/Yogabed"id="zxc"> yoga in bed</Link></li>
                  <li><Link className="dropdown-item text-center fs-6 text-dark" to="/Busyyoga"id="zxc"> office workers</Link></li>
                  <li><Link className="dropdown-item text-center fs-6 text-dark" to="/Benefits"id="zxc">Benefits of yoga</Link></li>
                  <li><Link className="dropdown-item text-center fs-6 text-dark" to="/Core"id="zxc"> Build Strong Core</Link></li>
                  <li><Link className="dropdown-item text-center fs-6 text-dark" to="/Flexibility"id="zxc"> Flexibility</Link></li>
                </ul>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
        
      )
    }
    
export default Header


