import React, { useState } from "react"
import Layout from "../component/Layout/Layout"
import { Link } from "gatsby"
import { Activity, HeartPulseFill, Calendar, StopFill } from "react-bootstrap-icons"
 const Bmi = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <Layout>
      <>
      <div class="px-4 pt-5 my-2 text-center border-bottom">
    <h1 class="display-4 fw-bold"><HeartPulseFill class="bi text-muted flex-shrink-0 m-3"></HeartPulseFill>BODY MASS INDEX</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 text-muted"><i>BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese.</i></p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
       
        <Link class="btn btn-outline-secondary btn-lg px-4 me-sm-3" to="/Diet">Diet &raquo;</Link>

        <Link class="btn btn-outline-secondary btn-lg px-4 me-sm-3" to="/Scdh">Schedule &raquo;</Link>
      </div>
    </div>
  </div>



  <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
          <div class="px-4 pt-1 my-2 text-center border-bottom">
      <h1><Activity class="bi text-muted flex-shrink-0 m-3"></Activity>BMI Calculator</h1>
      <div className="my-2">
    
        <input
        type="text"
        onChange={(e) => setHeight(e.target.value)}
        placeholder="height in cm"
        /></div>
        <div className="my-2"><input
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight in kg"
      /></div>
      <button className="btn btn-primary mt-3 btn-lg px-4 me-sm-3"onClick={handleBmi}> Calculate</button>
    </div>
           
          </div>
          <div className="col-md-5">
            <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://thumbs.gfycat.com/ParallelTediousFruitfly-size_restricted.gif" />
            
          </div>
        </div>
</div>
<div className="container pt-4 text-center">
  <h1>{bmi}</h1>
      <h2>{info}</h2>
      </div>
      <hr style={{ margin: "40px 0" }} />
      <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              <span className=""><StopFill class="bi text-muted flex-shrink-0 m-2"></StopFill>Is Body Mass Index reliable?</span>
            </h2>
            <p className="lead">
            <i className="text-muted"> "Your BMI, or Body Mass Index, is a measure of your weight compared to your height. he calculator will give you an idea of how your weight compares to common values. Body Mass Index (or BMI) is calculated as your weight (in kilograms) divided by the square of your height (in metres) or BMI = Kg/M2.Accurate assessments of obesity are important, as being overweight or obese significantly increases your risk of a variety of medical conditions including type 2 diabetes, heart disease and cancer. For most adults, BMI gives a good estimate of your weight-related health risks. If your BMI is over 35, your weight is definitely putting your health at risk, regardless of the factors below."</i>
            </p>
           
          </div>
          <div className="col-md-5">
            <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://www.diettechafrica.com/wp-content/uploads/2020/05/Body-mass-index.png" />
          </div>
        </div>
</div>
<hr style={{ margin: "40px 0" }} />
<div className="container my-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
     
      <h2 className="text-md"><i><Calendar class="bi text-muted flex-shrink-0 m-3"></Calendar>BMI CHART </i></h2>
    
    </div>
<div className="container">
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">


<img class="bd-placeholder-img" width="100%" height="100%" src="https://medical.azureedge.net/images/0aa8713b-421f-445f-996a-0aed1695b5a2.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

   
    </div>
    </div>
    </div>
    </div>
  </>
  </Layout>
  )
}
export default Bmi