import React, { useState } from "react"
import Layout from "../component/Layout/Layout"
import { Carousel } from "react-bootstrap"
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
                  src="https://homework18.com/images/breadcrumb/left-img.gif"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                ></img>

                <div class="container">
                  <div class="carousel-caption">
                    <h1 className="text-white">Contact Us</h1>
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
                      Connect With Our Team
                    </h1>
                    <p className="main-hero-para ">
                      If you have any questions or queries a member of staff
                      will always be happy to help. Feel free to contact us by
                      telephone or email and we will be sure to get back to you
                      as soon as possible.
                    </p>
                    <figure>
                      <img
                        src="https://1.bp.blogspot.com/-cbqU5GqnzPc/YI1l1Jr24lI/AAAAAAAACEk/Ig7_QOlAwSkC2F3qEDGiQJg6EBFDrrUKACLcBGAsYHQ/s800/whatwedo---dribbble.gif"
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
                            placeholder="Enter Your Feedback"
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

<hr className="featurette-divider" style={{margin: "40px"}}></hr>

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
                aria-expanded="true"
                aria-controls="collapseOne"
              >
             🔹 How often and for how long should I do the asanas?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
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
                Do I need to be on a vegetarian diet to benefit from yoga❔
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
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          </div>
    
  </div>
  <div className="col-md-5 order-md-1">
  <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://sell.g2.com/hubfs/FAQ.png" />
  
  </div>
</div>
</div>

      </>
    </Layout>
  )
}

export default Feedback
