import React, { useState } from "react"
import Layout from "../component/Layout/Layout"
import { Carousel } from "react-bootstrap"
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    firstName: "",
    lastName: "",
  
    email: "",

    feedback: "",
  })

  let name, value
  const postFeedbackData = event => {
    name = event.target.name
    value = event.target.value

    setFeedbackData({ ...feedbackData, [name]: value })
  }

  // connect with firebase
  const submitData = async event => {
    event.preventDefault()
    const { firstName, lastName, email, feedback } = feedbackData

    if (firstName && lastName && email && feedback) {
      const res = await fetch(
        "https://contact-form-a5ddb-default-rtdb.firebaseio.com/userFeedbackRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            feedback,
          }),
        }
      )

      if (res) {
        setFeedbackData({
          firstName: "",
          lastName: "",
          email: "",
          feedback: "",
        })
        alert("Data Stored")
      } else {
        alert("plz fill the data")
      }
    } else {
      alert("plz fill the data")
    }
  }

  return (
    <Layout>
      <>
        <div>
          <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="bd-placeholder-img"
                  width="100%"
                  height="100%"
                  src="https://usetrust.io/wp-content/uploads/2021/02/customer-feedback-tools.png"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                ></img>

                <div class="container">
                  <div class="carousel-caption">
                    <h1 className="text-white">FEEDBACK</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="contactus-section">
          <div className="container">
            <div className="row">
              <div className="col-10 col-lg-8 mx-auto">
                <div className="row">
                  <div className="contact-leftside col-12 col-lg-5 slideright">
                    <h1 className="main-heading fw-bold">
                    Share your feedback
                    </h1>
                    <p className="main-hero-para ">
                    Thanks for sending us your ideas, issues, or appreciation. We can’t respond individually, but we’ll pass it on to the teams who are working to help make YOGAMAYA better for everyone.
                    </p>
                    <figure>
                      <img
                        src="https://media.istockphoto.com/photos/we-want-your-feedback-written-yellow-chat-bubble-on-blue-background-picture-id1251681503?k=20&m=1251681503&s=170667a&w=0&h=3mro8rs7bfhCMcQxt6ZZH_bLpEDdYA6PpqNWaTdFi14="
                        alt="contatUsImg"
                        className="img-fluid "
                      />
                    </figure>
                  </div>

                  {/* right side contact form  */}
                  <div className="contact-rightside col-12 col-lg-7 slideright">
                    <form method="POST">
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name="firstName"
                            id=""
                            className="form-control"
                            placeholder="First Name"
                            value={feedbackData.firstName}
                            onChange={postFeedbackData}
                          />
                        </div>
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name="lastName"
                            id=""
                            className="form-control"
                            placeholder="Last Name"
                            value={feedbackData.lastName}
                            onChange={postFeedbackData}
                          />
                        </div>
                      </div>
                      <div className="row">
                       
                        <div className="col-12 contact-input-feild">
                          <input
                            type="text"
                            name="email"
                            id=""
                            className="form-control"
                            placeholder="Email ID"
                            value={feedbackData.email}
                            onChange={postFeedbackData}
                          />
                        </div>
                      </div>
                   

                      <div className="row">
                        <div className="col-12 ">
                          <textarea                   
                            type="text"
                            name="feedback"
                            id=""
                            className="form-control"
                            placeholder="Your Feedback"
                            value={feedbackData.feedback}
                            onChange={postFeedbackData}
                          >
                              </textarea>
                        </div>
                      </div>
                      <div class="form-check form-checkbox-style">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          className="main-hero-para"
                        >
                          I agree that the Yogmaya may contact me at the email
                          address or phone number above
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-style w-100  btn-primary mt-3 btn-lg px-4 me-sm-3"
                        onClick={submitData}
                      >
                        Submit
                      </button>
                    </form>
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
    </Layout>
  )
}

export default Feedback
