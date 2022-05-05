import React from 'react'
import Layout from "../component/Layout/Layout"

import { Link } from "gatsby"
const Items = [
 
 
  {
    name: "Surya Namaskar",
    imag: "https://c.tenor.com/GDuHNXjHFYcAAAAC/abhishek-kasegaonkar-surya-namaskar.gif",

    des:"If you only have 10 minutes to squeeze in your practice, flow through this ancient series of yoga postures,known as Sun Salutations",
    but: "/Surya",
  },
  {
    name: "8 Yoga Poses for Beginners",
    imag: "https://i.pinimg.com/originals/64/41/61/644161b5ce15397473f2c4a49620ee8f.gif",

    des:"Ready to give it a try?Thinking about trying yoga for the first time? Fear not. You are full of wonderful ideas, and starting yoga is a big one.",
    but: "/Beginners",

  },
  {
    name: "6 yoga poses in your bed",
    imag: "https://wholeandunleashed.com/wp-content/uploads/sites/7475/2019/03/06-Seated-Twist.gif",

    des:"Are you guilty of giving up on working out simply out of laziness? .Quit the guilt and try these easy yoga poses you can do in bed.",
    but: "/Yogabed",
  },
  {
    name: "7 Yoga Poses For Office Workers",
    imag: "https://www.sheknows.com/wp-content/uploads/2018/08/gdtsjhqjobppwaarhily.gif",

    des:"Yoga poses for office workers to combat the negative effects of sitting all day long at your desk.",
    but: "/Busyyoga",
  },
  {
    name: "Health Benefits of Yoga",
    imag: "https://cdn.dribbble.com/users/376544/screenshots/5496664/yoga-shot.gif",

    des:"Yoga will transform your health in many different ways.Here are 12 benefits of yoga on why you should consider practicing yoga daily!",
    but: "/Benefits",
  },
  {
    name: "Yoga Poses to Build Strong Core",
    imag: "https://images.everydayhealth.com/images/deadbug307b0c9017254c6da8f4d3928be6efd2.gif?sfvrsn=f45e402f_2",

    des:"These yoga poses helps to develop core strength,improve posture and keep your body fit.",
    but: "/Core",
  },
  {
    name: "How To Get Flexible At Age 40",
    imag: "https://i.pinimg.com/originals/92/36/26/923626d36da64475fb5e31de8351a145.gif",

    des:"It’s never too late to get flexible at age 40, so get ready to feel young again! Here are yoga poses to get flexible!",
    but: "/Flexibility",
  },
  {
    name: "Yoga Workout For Weight Loss",
    imag: "https://i.pinimg.com/originals/2d/ab/f2/2dabf2a96b4424a3e4e38c5016a406bc.gif",

    des:"This yoga workout for weight loss will help burn those annoying pounds off, increasing your body flexibility.",
    but: "/Weightloss",
  },
  {
    name: "Yoga For Pregnant women",
    imag: "https://static.vecteezy.com/system/resources/previews/002/211/859/original/pregnant-woman-doing-yoga-poses-vector.jpg",

    des:"Yoga is an safe for pregnant women because, it provides relief during pregnancy, it can help prepare your body for labor and delivery.",
    but: "/Prenatal",
  },
  {
    name: "Yoga For Correcting Bad Posture",
    imag: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/09/19132717/Posture.gif",

    des:"Practicing these yoga poses for correcting bad posture to strengthen your core and back muscles.",
    but: "/Posture",
  },
  {
    name: "Yoga Poses To Fall Asleep",
    imag: "https://www.sleepadvisor.org/wp-content/uploads/2020/03/animated-image-of-a-kid-with-sensory-processing-disorder-who-cant-fall-asleep.gif",

    des:"Roll out your yoga mat or practice this bedtime yoga poses on your bed to fall asleep faster!You will get the quality sleep you deserve!",
    but: "/Sleep",
  },
  {
    name: "Yoga Workout For Weight Loss",
    imag: "https://i.pinimg.com/originals/2d/ab/f2/2dabf2a96b4424a3e4e38c5016a406bc.gif",

    des:"This yoga workout for weight loss will help burn those annoying pounds off, increasing your body flexibility.",
    but: "/Weightloss",
  },
]
const Yoga = () => {
  return (
      <Layout>
      <><div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
    
    
    <img class="bd-placeholder-img" width="100%" height="100%" src="https://cdn.dribbble.com/users/3097534/screenshots/11937819/media/3e2e750bdef66be1b0f9ef73eeb2bdde.gif" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
    
          <div >
            <div class="carousel-caption text-start ">
              <h2 class="text-white text-center">Yoga for Everyone  </h2>
           
              
              
            </div>
          </div>
        </div>
        </div>
        </div>
      
  <section class="py-3 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
      <h6 className="text-primary">Yogmaya</h6>
        <h6 class="lead text-muted"><i> It’s time to roll out your yoga mat and discover the combination of physical and mental exercises that for thousands of years have hooked yoga practitioners around the globe. The beauty of yoga is that you don’t have to be a yogi or yogini to reap the benefits. Whether you are young or old, overweight or fit, yoga has the power to calm the mind and strengthen the body. Don’t be intimidated by yoga terminology, fancy yoga studios and complicated poses. Yoga is for everyone.</i></h6>
      </div>
    </div>
  </section>
       
      
  <div className="container text-center ">
  <div className="row justify-content-center">
    {Items.map((item, i) => {
       return (
  <div key={i} className="col-lg-4 col-md-6 col-sm-12">
      <div className="card card-body shadow mb-4" style={{
                        
                       
                       height: "450px",
                     
                      
               }}>
      <img
                          className="d-block mx-lg-auto img-fluid"
                          src={item.imag}
                          alt="1"
                          style={{
                        
                                   margin: "0 auto",
                                  height: "200px",
                                  width: "300px",
                                 
                          }}/>
      <div class="card-body content">
        <h4 class="card-title">{item.name}</h4>
        <p class="card-text">{item.des}</p>
     
        <Link className="btn btn-primary" to={item.but}>{item.name}</Link>
      </div>
    </div>
  </div>
     )
    })}
  
</div>
</div>
</>
</Layout> )
}

export default Yoga