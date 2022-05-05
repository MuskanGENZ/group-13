import React from "react"
import { Link } from "gatsby"
import { Bag, BagCheck, EnvelopeOpen, GiftFill, PersonHeart, PersonHearts, Speedometer, StopFill } from "react-bootstrap-icons"

const Features = () => {
  return (
    <>
    <hr style={{ margin: "40px 0" }} />
    
    <div className="container my-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
     
   
      <h6 className="text-primary"><i>SERVICES WE PROVIDE</i></h6>
      <h1 className="text-md"><GiftFill class="bi text-muted flex-shrink-0 m-3"></GiftFill>OUR SERVICES</h1>

     
    </div>
    <div class="container">
    <div class="row">
      <div class="col-lg-4"id="qwerty">
        <img alt="Card image cap" width="140" height="140" class="card-img-top img-fluid shadow" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/08/18/10/bmi-measuring-0.jpg?quality=75&width=1200&auto=webp" />

        <h4><Speedometer  class="bi light flex-shrink-0 m-3"></Speedometer>BMI</h4>
        <p ><i className="text-muted">Use this calculator to check your body mass index (BMI) and find out if you're a healthy weight or not</i></p>
        <p><Link class="btn btn-light" to="/Bmi">View details &raquo;</Link></p>
      </div>
      <div class="col-lg-4">
      <img alt="Card image cap" width="140" height="140" class="card-img-top img-fluid shadow" src="https://www.yogabaron.com/wp-content/uploads/2018/12/Yoga-props-mat-block-straps-dec17.jpg" />

        <h4><BagCheck  class="bi  flex-shrink-0 m-3"></BagCheck>PRODUCT</h4>
        <p><i className="text-muted">Are you a yoga enthusiast and in search of the appropriate equipment and accessories?Click on view details.</i></p>
        <p><Link class="btn btn-light" to="/Product">View details &raquo;</Link></p>
      </div>
      <div class="col-lg-4">
      <img alt="Card image cap" width="140" height="140" class="card-img-top img-fluid shadow" src="https://blog.yogamatters.com/wp-content/uploads/2021/06/surya-namaskar.png" />
        <h4><PersonHeart class="bi  flex-shrink-0 m-3"></PersonHeart>YOGA</h4>
        <p><i className="text-muted">Yoga is much more. In very simple words, giving care to your body, mind and breath is yoga.</i></p>
        <p><Link class="btn btn-light" to="/Yoga">View details &raquo;</Link></p>
      </div>
    </div>

    </div>
    <hr style={{ margin: "40px 0" }} />
    <div className="container my-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h6 className="text-primary">Yogmaya</h6>
      <h2 className="text-md"><i>What our CLIENTS says<EnvelopeOpen class="bi text-muted flex-shrink-0 m-3"></EnvelopeOpen></i></h2>
      {/* <p>
        It will be as simple as occidental. In fact, it will be Occidental.
      </p> */}
    </div>
      <div className="container">
        <div className="row featurette slideright1">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              <span className="">Rashmi</span>
            </h2>
            <p className="lead">
            <i className="text-muted"> "After years of back problems and poor posture yoga has provided me relief and after several months I could notice a significant improvement. Previously I tried acupuncture, physio therapy, massage, chiropractor and nothing provided me the results as yoga. I am really excited as I know as I continue I will keep strengthening and improving my body and self awareness. A super big thanks to teacher, Versha, who enlightened me and got me going, and to Ishita, both of whom have made such a difference in my life."</i>
            </p>
          </div>
          <div className="col-md-5">
            <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg" />
          </div>
        </div>

        <hr className="featurette-divider" style={{margin: "40px"}}></hr>

        <div className="row featurette slideright1">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
            
              <span className="">Shweta</span>
            </h2>
            <p className="lead">
           <i className="text-muted">"
              I have enjoyed your classes immensely. I have tried several classes whilst being in India and found yours so friendly, caring and great instruction of the movements of yoga poses. I must say your instructors are very thorough with their approach and explanation of the poses and I really enjoy them and their humour as well! Having practiced yoga for only 5 years now, I was searching for a class that captures the philosophy and presence of movement that calms my mind and keeps my body healthy and strong."</i>
            </p>
          </div>
          <div className="col-md-5 order-md-1">
          <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://t4.ftcdn.net/jpg/02/46/34/43/360_F_246344306_E4KQf8mvvWsCAwrSMEEY6GUOa22TjiUn.jpg" />
          </div>
        </div>

        <hr className="featurette-divider" style={{margin: "40px"}}></hr>

        <div className="row featurette slideright1">
          <div className="col-md-7">
            <h2 className="featurette-heading">
           <span className="">Veer</span>
            </h2>
            <p className="lead">
              <i className="text-muted">"I love the YOGAMAYA experience. The authenticity, energy, expertise, TLC, inclusiveness, kindness, thoughtfulness are the type of things I appreciate the very most and you nurture that beautifully.I've developed my practice by attending a range of classes, but more importantly, I feel I've developed a deeper understanding of the art of yoga.I enjoy the variety of classes, I can always find a class that suits my mood perfectly."</i>
            </p>
          </div>
          <div className="col-md-5">
          <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://media.istockphoto.com/photos/living-that-urban-life-picture-id1165314750?k=20&m=1165314750&s=612x612&w=0&h=QcN0aTHS8IpSbNEnSU9Vno8vUjCEFQs4gbZ72dG6yvM=" />
          </div>
        </div>
      </div>
   
  </>
  )
}

export default Features