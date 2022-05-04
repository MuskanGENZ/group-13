import React from "react"
import Layout from "../component/Layout/Layout"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Items = [
 
 
  {
    name: "Iyengar yoga wall ropes",
    imag: "https://www.organicauthority.com/.image/t_share/MTU5MzMwMjA4MjQxNzU1NzQ0/yoga-rope-equipment-on-a-wall.jpg",
    link: "https://www.amazon.in/Iyengar-ropes-small-restorative-theraupatic/dp/B09HL2N5SG/ref=sr_1_19?keywords=yoga+props&qid=1649350302&s=sports&sprefix=yoga+PR%2Csporting%2C310&sr=1-19",

  },
  {
    name: "Serveuttam Yoga Block",
    imag: "https://m.media-amazon.com/images/S/aplus-media/sc/532cf7b9-9f8d-47f6-80a8-1704774db22b.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    link: "https://www.amazon.in/Serveuttam-High-Density-Flexibility-Lightweight-Moisture-Proof/dp/B08KYDBD24",

  },
  {
    name: "Yoga Belt 8 Loop",
    imag: "https://m.media-amazon.com/images/I/61cnaeoiqIS._SX425_.jpg",
    link: "https://www.amazon.in/Stretching-Pilates-Exercise-Physical-Therapy/dp/B096SLMM6L/ref=pd_lpo_2?pd_rd_i=B09TXR3W1K&psc=1",

  },
  {
    name: "Strauss Yoga Knee Pad Cushions",
    imag: "https://image.made-in-china.com/202f0j00VqGfaopdYMbD/Yoga-Knee-Pad-Support-for-Yoga-and-Pilates-exercise-Cushion-for-Knees-Elbow-and-Head-for-Knees-Elbow-Hand-and-Head.jpg",
    link: "https://www.amazon.in/Strauss-Yoga-Knee-Cushion-Blue/dp/B0967Q1MRD/ref=mp_s_a_1_25?crid=29J5F6KDE9UTE&keywords=yoga&pscroll=1&qid=1649238534&sprefix=yoga+%2Caps%2C270&sr=8-25&wIndexMainSlot=26",

  },
  {
    name: "Anti-Skid Yoga Mat with Strap and Carry Bag",
    imag: "https://m.media-amazon.com/images/I/71keISOabCL._SX450_.jpg",
    link: "https://www.amazon.in/VIFITKIT-Multicolour-Superior-Cushioning-Carrying/dp/B08Q7CJJ3F/ref=asc_df_B08Q7CJJ3F/?tag=googleshopdes-21&linkCode=df0&hvadid=396985961907&hvpos=&hvnetw=g&hvrand=5541741673049560417&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9075215&hvtargid=pla-1086661902655&psc=1&ext_vrnc=hi",

  },
  {
    name: "Tormeti Exercise Resistance Bands Set",
    imag: "https://m.media-amazon.com/images/I/616U2djL-RL._SL1000_.jpg",
    link: "https://www.amazon.in/ProGrade-Resistance-Bands-ADJUSTABLE-Anti-Snap/dp/B00GXFNQZM?ref_=ast_sto_dp&th=1&psc=1",

  },
  {
    name: "Anti - Slip Reversible Yoga Mat - 6 MM thickness",
    imag: "https://m.media-amazon.com/images/I/31up-7imYBL.jpg",
    link: "https://www.amazon.in/PUMA-Anti-Slip-Reversible-thickness/dp/B09HWYDJL6",

  },
  {
    name: "Imported Anti Burst Gym Fitness Aerobic Yoga Ball",
    imag: "https://cf.shopee.ph/file/51d8dad698fc0aa1b5582541187d5f17",
    link: "https://www.amazon.in/LETS-PLAY-Exercise-Slimming-Multi-Colour/dp/B08MFJ3T4Q/ref=sr_1_12?crid=2IK31BAD3TJUW&keywords=yoga+ball&qid=1650044607&sprefix=yoga+ball%2Caps%2C324&sr=8-12",

  },
  {
    name: "Fiberglass Foam Circle Exercise Pilates Ring",
    imag: "https://images-eu.ssl-images-amazon.com/images/I/418JkBdTk4L._SY300_SX300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.in/FEGSY-Streching-Relaxation-Improving-Backbands/dp/B07P8HB6MX/ref=sr_1_6?crid=BAFZI5LH60T&keywords=PRANA+YOGA+RING&qid=1650044954&sprefix=prana+yoga+ring%2Caps%2C211&sr=8-6",

  },
]

const Product = () => {
  return (
  
    <Layout>
     <>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">


<img class="bd-placeholder-img" width="100%" height="100%" src="https://cdn2.assets-servd.host/pebble-mag/production/images/_1200x630_crop_center-center_82_none/eco-friendly-yoga-at-home-products_6.jpg?mtime=1596460601" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

      <div class="container">
        <div class="carousel-caption">
          <h1 class="text-white">Get your gear on</h1>
        
          
        </div>
      </div>
    </div>
    </div>
    </div>


  <div className="container text-center py-5">
  <h2 className="pb-2 text-center"><ShoppingCartIcon></ShoppingCartIcon>  PRODUCTS</h2>
  <h5  className="text-muted"><i>"You don’t need anything to start a yoga practice, but here’s what you may want as you progress."</i></h5>
  <div className="row justify-content-center py-5">

 
  {Items.map((item, i) => {
          return (
                    <div key={i} className="col-lg-4 col-md-6 col-sm-12" >
                      <div className="card card-body shadow mb-4 " id="mnb">
                        <img
                          className="d-block mx-lg-auto img-fluid"
                          src={item.imag}
                          alt="1"
                          style={{
                        
                                   margin: "0 auto",
                                  height: "270px",
                                  width: "320px",
                                 
                          }}/>
                          
                       
                          <div class=" card-body content text-center justify-content-center">
  <h5 className="m-2">{item.name}</h5>

<div class="box1"><a href={item.link} className="btn btn-primary">BUY NOW</a></div>
</div>
                 
                      </div>
                    </div>
                  )
                })}
        
            </div>
            </div>
            
</>
           </Layout>
          )
        }
        
        export default Product
         
