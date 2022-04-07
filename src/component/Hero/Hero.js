import { Carousel } from "react-bootstrap";
import React from "react";

function Hero() {
  return (
    <>
    <div className="mb-4 ">
      <Carousel id="dfg">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: 700}}
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: 700}}
            src="https://cdn.pixabay.com/photo/2016/11/18/14/15/woman-1834827_960_720.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: 700}}
            src="https://cdn.pixabay.com/photo/2020/07/06/07/19/meditate-5375835_960_720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

      <hr style={{ margin: "40px 0" }} />   

<div class="row mx-4">
  <div class="col-md-6 col-lg-4">
    <div class="card shadow-lg"><img alt="Card image cap" class="card-img-top img-fluid" src="https://thumbs.dreamstime.com/b/set-your-goals-text-color-notes-office-supplies-black-background-business-concept-set-your-goals-167100524.jpg" />
      <div class="card-block"id="colo">
        <h5 class="card-title px-2">1.Get a diet.</h5>

        <p class="card-text text-muted py-2 px-2" ><i>
        Eat healthy,stay healthy.But even after you’ve picked out a meal plan or eating pattern, maintaining that healthy diet day in and day out has its fair share of difficulties.</i></p>
      </div>
    </div>
  </div>

  <div class="col-md-6 col-lg-4">
    <div class="card shadow-lg"><img alt="Card image cap" class="card-img-top img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtprbuBUyzdiL8caRP_Ou_jZOoYT18eAVEDA&usqp=CAU" />
      <div class="card-block">
        <h5 class="card-title px-2">2.Set a schedule.</h5>

        <p class="card-text  text-muted py-2 px-2"><i>
        Change your schedule,change your life.A daily schedule helps you prioritize your wants and needs efficiently and offers you structure to support your productivity.</i></p>
      </div>
    </div>
  </div>

  <div class="col-md-6 col-lg-4">
    <div class="card shadow-lg"><img alt="Card image cap" class="card-img-top img-fluid" src="https://media.istockphoto.com/photos/my-bmi-formula-written-on-a-page-body-mass-index-picture-id635776320?s=612x612" />
    <div class="card-block">
        <h5 class="card-title px-2">3.Check BMI</h5>

        <p class="card-text text-muted py-2 px-2"><i>
        BMI is a measure of whether you're a healthy weight for your height. Use this BMI calculator to check the adults in your family.Knowing your BMI can make you feel light</i></p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Hero;
