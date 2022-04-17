import React from "react"
import { Link } from "gatsby"

import Image from "../Images/Images"
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const Team = () => {
  return (
    <>
<section id="team" class="pb-5">
<div className="container my-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
<h6 className="text-primary"><i>Yogmaya</i></h6>
      <h1 className="text-md"><GroupsIcon fontSize="large"  color="secondary"></GroupsIcon>  OUR TEAM</h1>
      <hr style={{ margin: "20px 0" }} />
        <div class="row">
         
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                  
                                    <p> <Image class="img-fluid"   filename={`1.jpeg`}
                                   alt="1"/></p> <h4 class="card-title text-muted">VERSHA KUMARI</h4>
                                   <p className="text-center text-muted"><i>Web developer </i></p>
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4 ">
                                    <h4 class="card-title">ISHITA GUPTA</h4>
                                    <p class="card-text align-items-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</p>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                <p> <Image class="img-fluid"   filename={`2.jpg`}
                                   alt="1"/></p>
                                    <h4 class="card-title text-muted">VERSHA KUMARI</h4>
                                    <p className="text-center text-muted"><i>Web developer </i></p>
                              
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">VERSHA KUMARI</h4>
                                    <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                                                 </p>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="card image"/></p>
                                    <h4 class="card-title text-muted">VERSHA KUMARI</h4>
                                    <p className="text-center text-muted"><i>Web developer </i></p>
                             
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">VRISHTI MALIK</h4>
                                    <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="col-xs-12 col-sm-6 col-md-5 m-auto" >
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center ">
                                    <p><img class=" img-fluid" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="card image"/></p>
                                    <h4 class="card-title text-muted">VERSHA KUMARI</h4>
                                    <p className="text-center text-muted"><i>Web developer </i></p>
                                
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">VIDHISHA MANGAL</h4>
                                    <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
            <div class="col-xs-12 col-sm-6 col-md-5 m-auto ">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="card image"/></p>
                                    <h4 class="card-title text-muted">VERSHA KUMARI</h4>
                                    <p className="text-center text-muted"><i>Web developer </i></p>
                                 
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">MUSKAN</h4>
                                    <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                                       </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
  

        </div>
    </div>
</section>
<div className="container">


    <div className="container my-2" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h6 className="text-primary">Yogmaya</h6>
      <h2 className="text-md"><QuestionAnswerIcon></QuestionAnswerIcon>  <i>Frequently Asked Questions  </i></h2>
 
    </div>
    <hr style={{ margin: "10px 0" }} />
<div className="row featurette">
  <div className="col-md-7 order-md-2">
  <div class="accordion container" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
             🔹 How often and for how long should I do the asanas?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              In the beginning, try to do it three times a week, each session lasting for about 45 minutes. After some practice, increase it to five times a week, for an hour each time.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                🔹 Do I need to be on a vegetarian diet to benefit from yoga?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              No. You can derive benefit from yoga without a special vegetarian diet. However, for the most complete yoga experience, a vegetarian diet is preferred. Vegetarian yogic foods are felt to calm the mind and sharpen the intellect. These foods supply the utmost energy and are digested easily.

              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header " id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                🔹 What is Hatha Yoga?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              “HA” means sun and “THA” means moon. Branches of the yoga practice that involve physical exercise, breathing practices, and movement. These exercises are designed to have a salutary effect on posture, flexibility, and strength and are intended ultimately to prepare the body to remain still for long periods of meditation.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                🔹 How often should I practice to have the best results?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body ">
              When first starting out try going twice a week then after one month start going three times per week. If you add up to going 5-6 days a week make sure you always have at least one day off so your body can recouperate. Also if you are practicing yoga almost everyday its good idea to mix up the style (i.e. power yoga one day, yin the next…)
              </div>
            </div>
          </div>
  
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                🔹 What is Vinyasa or Power Yoga?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              Power yoga is a vinyasa style of yoga in which one pose is linked to the next by breath. It is a vigorous class and often modeled after poses in ashtanga yoga.
              </div>
            </div>
          </div>
       
          <div class="accordion-item">
            <h2 class="accordion-header" id="headinSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                🔹  What is Ashtanga Yoga?
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              Patanjali's eight-limbed path, also called Raja Yoga. This yoga contains or should contain eight components: morality; ethics; posture; breath control; sense control; concentration; meditation; absorption. Also the "brand" name for the style of yoga developed and taught by Sri K. Pattabhi Jois with a set sequence of yoga postures that take a student from A-Z in Asana.
              </div>
            </div>
          </div>
          </div>
    
  </div>
  <div className="col-md-5 order-md-1">
  <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://www.exal.io/assets/images/faq.gif" />
  
  </div>
</div>
</div>
    </>
    // <div className="container text-center py-5">
    //   <h2 className="pb-2 border-bottom text-center">Team Members</h2>
    //   <div className="row justify-content-center py-5">
    //     {Items.map((item, i) => {
    //       return (
    //         <div key={i} className="col-lg-4 col-md-6 col-sm-12">
    //           <div
    //             className="card card-body shadow mb-4 "
    //             style={{ height: "500px" }}
    //           >
    //             <Image
    //               className="d-block mx-lg-auto img-fluid"
    //               style={{
    //                 margin: "0 auto",
    //                 height: "200px",
    //                 width: "200px",
    //                 borderRadius: "10%",
    //               }}
    //               filename={`${item.img}.jpeg`}
    //               alt="1"
    //             />
    //             <h3 className="m-2">{item.name}</h3>

    //             <ul className="list-unstyled justify-content-center d-flex mb-0">
    //               <Link className="m-3" to={item.facebook}>
    //                 <Facebook />
    //               </Link>
    //               <Link className="m-3" to={item.instagram}>
    //                 <Instagram />
    //               </Link>
    //               <Link className="m-3" to={item.linkedin}>
    //                 <Linkedin />
    //               </Link>
    //             </ul>
    //           </div>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
  )
}

export default Team
