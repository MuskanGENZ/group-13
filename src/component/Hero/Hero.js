import { Carousel } from "react-bootstrap";
import GroupsIcon from '@mui/icons-material/Groups';
import React from "react";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

function Hero() {
  return (
    <>
   
    <div className="mb-4 ">
      <Carousel id="dfg">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: 700}}
            src="https://imgsrv2.voi.id/wtvSOgptpcdxnPxfQu6YrvXmn3nUgINqQFX73_PfKxs/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy82MDgwNi8yMDIxMDYyMTE3NDItbWFpbi5qcGc.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="slideleft">Yogmaya</h3>
            <h5 className="slideleft"><i>"Yoga is the journey of the self, through the self, to the self.”</i></h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            style={{height: 700}}
            src="https://static01.nyt.com/images/2016/12/02/well/move/yoga_body_images-slide-ZRO9/yoga_body_images-slide-ZRO9-superJumbo.jpg"
          />

          <Carousel.Caption>
          <h5 className="slideleft"><i>"Your body is your temple, you should worship it daily.”</i></h5>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: 700}}
            src="https://cdn.statically.io/img/www.qoala.app/f=auto/id/blog/wp-content/uploads/2020/12/25-Manfaat-Yoga-untuk-Kesehatan-Tubuh-hingga-Mental.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h5 className=" slideleft"><i>"Yoga is a light, which once lit will never dim. The better your practice, the brighter your flame.”</i></h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <hr style={{ margin: "40px 0" }} />
    
    <div className="container my-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
     
   
      <h6 className="text-primary"><i>Yogmaya</i></h6>
      <h1 className="text-md"> ABOUT US</h1>

     
    </div>
    <div className="container" id="zxx">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
         
            </h2>
            <p className="lead slideleft">
            <h3 className="text-primary"><EmojiPeopleIcon  color="secondary" fontSize="large"></EmojiPeopleIcon><i> About us...</i></h3>
            <i className="text-muted">"We believe that real yoga is not about standing on your head and contorting yourself into knots. Yoga is about finding your centre. It’s a way of developing inner strength."We believe, every being deserves to enjoy a happy and fulfilled life doing the things they love.Our site is aimed for everyone but especially for those that are feeling a bit overwhelmed with life, feeling stressed or anxious, and just need a bit of unconditional love and guidance.You don’t need to be ‘spiritual’ to do yoga and meditation and you can still gain the variety of benefits such as reducing stress, manage anxiety, enhance self-awareness, improve sleep, amongst others.Experiencing freedom of movement and mobility, embracing all life situations with a positive mindset, cultivating a life of abundance and opportunity, blissful sleep, balanced hormones, optimised gut health... do any of these feel out of reach to you right now? If so,scroll down and check out our page.</i>
            </p>
          </div>
          <div className="col-md-5 slideleft">
            <img alt="Card image cap"   width="500" height="300" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg " src="https://media4.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif?cid=790b76116422e56e0ba781dab931b69587dd1c499bcb0a3b&rid=giphy.gif&ct=g" />
          </div>
        </div>
      </div>

      <hr style={{ margin: "40px 0" }} />   

<div class="row mx-4">
  <div class="col-md-6 col-lg-4 slideright">
    <div class="card shadow-lg"><img alt="Card image cap" class="card-img-top img-fluid " src="https://thumbs.gfycat.com/EverlastingImpishHairstreakbutterfly-max-1mb.gif" />
      <div class="card-block "id="colo">
        <h5 class="card-title px-2 ">1.Get a diet.</h5>

        <p class="card-text text-muted py-2 px-2 " ><i>
        Eat healthy,stay healthy.But even after you’ve picked out a meal plan or eating pattern, maintaining that healthy diet day in and day out has its fair share of difficulties.</i></p>
      </div>
    </div>
  </div>

  <div class="col-md-6 col-lg-4 slideright">
    <div class="card shadow-lg"><img alt="Card image cap" class="card-img-top img-fluid" src="  https://thumbs.gfycat.com/PleasantUnlinedBuffalo-max-1mb.gif" />
      <div class="card-block"id="colo">
        <h5 class="card-title px-2">2.Set a schedule.</h5>

        <p class="card-text  text-muted py-2 px-2"><i>
        Change your schedule,change your life.A daily schedule helps you prioritize your wants and needs efficiently and offers you structure to support your productivity.</i></p>
      </div>
    </div>
  </div>

  <div class="col-md-6 col-lg-4 slideright">
    <div class="card shadow-lg">
      <img alt="Card image cap" class="card-img-top img-fluid" src="https://i.makeagif.com/media/5-14-2017/bmRWJA.gif" />
    <div class="card-block"id="colo">
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
