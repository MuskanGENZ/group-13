import React, { useState } from "react";
import Layout from "../component/Layout/Layout"
import { Carousel } from "react-bootstrap";
const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

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
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <Layout>
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
            <h3 className="slideleft">FIT ME</h3>
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
          <h3 className="slideleft"><i>"Your body is your temple, you should worship it daily.”</i></h3>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: 700}}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yoga-for-beginners-main-1582136732.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3 className="text-dark slideleft"><i>"Yoga is a light, which once lit will never dim. The better your practice, the brighter your flame.”</i></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-10 col-lg-8 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5 slideright">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <figure>
                    <img
                      src="https://imgsrv2.voi.id/wtvSOgptpcdxnPxfQu6YrvXmn3nUgINqQFX73_PfKxs/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy82MDgwNi8yMDIxMDYyMTE3NDItbWFpbi5qcGc.jpg"
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
                        className="main-hero-para">
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="btn btn-style w-100  btn-primary mt-3 btn-lg px-4 me-sm-3"
                      onClick={submitData}>
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
  );
};

export default Contact;