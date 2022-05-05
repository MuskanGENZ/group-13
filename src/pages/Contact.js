import React, { useState } from "react"
import Layout from "../component/Layout/Layout"
import { Carousel } from "react-bootstrap"
const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  })

  let name, value
  const postUserData = event => {
    name = event.target.name
    value = event.target.value

    setUserData({ ...userData, [name]: value })
  }

  // connect with firebase
  const submitData = async event => {
    event.preventDefault()
    const { firstName, lastName, phone, email, address, message } = userData

    if (firstName && lastName && phone && email && address && message) {
      const res = await fetch(
        "https://contact-form-a5ddb-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      )

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
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
                      email and we will be sure to get back to you
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
                            value={userData.firstName}
                            onChange={postUserData}
                          />
                        </div>
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name="lastName"
                            id=""
                            className="form-control"
                            placeholder="Last Name"
                            value={userData.lastName}
                            onChange={postUserData}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name="phone"
                            id=""
                            className="form-control"
                            placeholder="Phone Number "
                            value={userData.phone}
                            onChange={postUserData}
                          />
                        </div>
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name="email"
                            id=""
                            className="form-control"
                            placeholder="Email ID"
                            value={userData.email}
                            onChange={postUserData}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 contact-input-feild">
                          <input
                            type="text"
                            name="address"
                            id=""
                            className="form-control"
                            placeholder="Add Address"
                            value={userData.address}
                            onChange={postUserData}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 ">
                          <input
                            type="text"
                            name="message"
                            id=""
                            className="form-control"
                            placeholder="Enter Your Message"
                            value={userData.message}
                            onChange={postUserData}
                          />
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
                          I agree that the YOGMAYA may contact me at the email
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
        

        


      </>
    </Layout>
  )
}

export default Contact
