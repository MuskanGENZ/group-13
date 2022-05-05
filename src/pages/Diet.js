import React from "react"
import Layout from "../component/Layout/Layout"
import { Link } from "gatsby"
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DateRangeIcon from '@mui/icons-material/DateRange';
 const Diet = () => {
  return (
    <Layout>

<>  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">


<img class="bd-placeholder-img" width="100%" height="100%" src="https://magazine.vitality.co.uk/wp-content/uploads/2020/07/GettyImages-1179522008.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

      <div >
        <div class="carousel-caption text-start ">
          <h1 class="text-white"><RestaurantIcon color="secondary"/> DIET  </h1>
          <h5><i class="text-white">If you want to know more about the concept of a yoga diet and exactly what kind of diet is best to complement your yoga practice, then you’re in the right place!</i></h5>
          
        </div>
      </div>
    </div>
    </div>
    </div>
    <hr style={{ margin: "40px 0" }} />
    <div className="container my-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h6 className="text-primary">Yogmaya</h6>
      <h2 className="text-md"><i>So, what makes a ‘yogic diet’? </i></h2>
      {/* <p>
        It will be as simple as occidental. In fact, it will be Occidental.
      </p> */}
    </div>
      <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              <span className="text-muted">#1 Vegetarian </span>
            </h2>
            <p className="lead">
            <i className="text-muted"> "JA plant-based, whole-food diet is essential for yogis. Fortunately, vegetarianism and veganism have become quite popular, making going meat-free much easier when grocery shopping, cooking, and dining out. Nuts, dairy products, leafy greens, and legumes are all great sources of high-quality protein."</i>
            </p>
            <h2 className="featurette-heading">
              <span className="text-muted">#2 Sattvic </span>
            </h2>
            <p className="lead">
            <i className="text-muted"> "To truly combine yoga and diet into your lifestyle, any food or drink that you consume should be Sattvic.Sattvic foods are believed to make up the purest diet and the best way to nourish both mind and body, allowing yogis to achieve inner peace and good health.In Ayurvedic practice, sattvic foods are thought to increase energy, happiness, calmness, and mental clarity."</i>
            </p>
          </div>
          <div className="col-md-5">
            <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://www.petaindia.com/wp-content/uploads/2020/09/broccoli-carrot-hug-HAVD-2020-GIF-2.gif" />
          </div>
        </div>

        <hr className="featurette-divider" style={{margin: "40px"}}></hr>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
            
              <span className="text-muted">#3 Free From Chemicals </span>
            </h2>
            <p className="lead">
           <i className="text-muted">"
           We are exposed to chemical substances just about everywhere–in the air, in the water, and in the food that we consume. One of the goals of hatha yoga is to purify the physical and energetic bodies.  Wherever possible, avoid processed foods, artificial sweeteners, caffeine, alcohol, and tobacco to move towards a healthier lifestyle and to create purity in the body and mind."</i>
            </p>
            <h2 className="featurette-heading">
            
              <span className="text-muted">#4 Eat Fresh Foods </span>
            </h2>
            <p className="lead">
           <i className="text-muted">"
           A yoga diet consists of whole, fresh, seasonal foods and organic, locally grown foods, and as close to their natural state as possible.This means always preparing a fresh meal from scratch, rather than relying on frozen vegetables or readily prepared meals, regardless of whether they are technically made up of ‘sattvic’ foods."</i>
            </p>
          </div>
          <div className="col-md-5 order-md-1">
          <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://i.pinimg.com/originals/7a/b5/51/7ab551af887f2a408b1ca517e021fe65.gif" />
          
          </div>
        </div>
        <hr className="featurette-divider" style={{margin: "40px"}}></hr>

<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">
   <span className="text-muted">#5 Eat At Regular Intervals</span>
    </h2>
    <p className="lead">
      <i className="text-muted">"Except for the first meal of the day, it’s important to allow at least five hours between your meals. This allows your system to fully digest from your last meal. When you eat at regular intervals, your meals will taste better, and you will be less likely to overeat."</i>
    </p>
    <h2 className="featurette-heading">
   <span className="text-muted">#6 Fast For At Least One Day</span>
    </h2>
    <p className="lead">
      <i className="text-muted">"The concept of fasting should be considered in the context of a yogic diet. Fasting is the practice of abstaining from food and/or drink for a period of time. The purpose of fasting is to cleanse the body, seek a spiritual goal, or express devotion to a chosen deity.</i>
    </p>
  </div>
  <div className="col-md-5">
  <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://static.toiimg.com/photo/90732608.cms" />
  </div>
</div>



    </div>
    <hr style={{ margin: "40px 0" }} />
    <div className="container my-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h6 className="text-primary">Yogmaya</h6>
      <h2 className="text-md"><DateRangeIcon  fontSize="large"> </DateRangeIcon> <i>DIET CHART</i></h2>
      
    </div>
    <div class="table-responsive container">
    <table class="table">
  <thead class="thead-dark">
    <tr class="table-secondary">
      <th scope="col">#</th>
      <th scope="col">Space</th>
      <th scope="col">Monday</th>
      <th scope="col">Tuesday</th>
      <th scope="col">Wednesday</th>
      <th scope="col">Thursday</th>
      <th scope="col">Friday</th>
      <th scope="col">Saturday</th>
      <th scope="col">Sunday</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-warning">
      <th scope="row">1</th>
      <td>Early Morning 5-6AM</td>
      <td>Apple</td>
      <td>Carrot</td>
      <td>Banana</td>
      <td>Dry Fruits</td>
      <td>Banana</td>
      <td>Banana</td>
      <td>Banana</td>
    </tr>
    <tr class="table-success">
      <th scope="row">2</th>
      <td>Breakfast 7AM</td>
      <td>Oats or Ragi Idli/Oatmeal</td>
      <td>Utappam</td>
      <td>Oats Dosa</td>
      <td>Wheat Upma</td>
      <td>Chapati</td>
      <td>Noodles/Masala Oat</td>
      <td>Bread Omelette</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">3</th>
      <td>Morning 9AM</td>
      <td>Fruit</td>
      <td>Dates</td>
      <td>Fruit</td>
      <td>Curd</td>
      <td>Handful of peanuts</td>
      <td>Dates</td>
      <td>2 Biscuits</td>
    </tr>
    <tr class="table-warning">
      <th scope="row">4</th>
      <td>Mid Morning 11AM</td>
      <td>1 glass Buttermilk with jeera Powder with salt</td>
      <td>Jaljeera water</td>
      <td>Ginger Lemonade water</td>
      <td>Buttermilk</td>
      <td>Ginger lemonade</td>
      <td>Buttermilk/coconut water/Sugarcane Juice</td>
      <td>Jaljeera water</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">5</th>
      <td>Lunch 1PM</td>
      <td>Rice+Egg curry,Sambhar</td>
      <td>Rice+carrot curry, Dondakal</td>
      <td>Rice+ Bendakaya Pulusu, Bendakai</td>
      <td>Rice egg pulusu, Egg Plant curry</td>
      <td>Rice+capsicum curry, Dosakai Royyalu</td>
      <td>Rice+soya curry/other, chikkudukaya</td>
      <td>Veg Pulao+raita</td>
    </tr>
    <tr class="table-success">
      <th scope="row">6</th>
      <td>Mid Afternoon 3 PM</td>
      <td>Curd</td>
      <td>Curd</td>
      <td>Curd</td>
      <td>Curd</td>
      <td>Curd</td>
      <td>Curd</td>
      <td>Curd</td>
    </tr>
    <tr class="table-warning">
      <th scope="row">7</th>
      <td>Evening Snack 5PM</td>
      <td>Fruit/Green tea</td>
      <td>Fruit/Green tea</td>
      <td>Fruit/Green tea</td>
      <td>Fruit/Green tea</td>
      <td>Fruit/Green tea</td>
      <td>Fruit/Green tea</td>
      <td>Fruit/Green tea</td>
    </tr>
    <tr class="table-success">
      <th scope="row">8</th>
      <td>Dinner 7PM</td>
      <td>2 Roti+Tomato Pappu</td>
      <td>2 Roti+Soya/capsicum</td>
      <td>2 Roti+Dosakai pappu</td>
      <td>2 Roti+Onion curry</td>
      <td>2 Roti+Thotakura pappu</td>
      <td>2 Roti+Potato Carrot Masala</td>
      <td>2 Roti+raita</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">9</th>
      <td>Bed Time 9PM</td>
      <td>Milk</td>
      <td>-</td>
      <td>Milk</td>
      <td>-</td>
      <td>Milk</td>
      <td>Custard Milk</td>
      <td>Milk</td>
    </tr>
  </tbody>
</table>


 </div>
    </>
  </Layout>
  )
}
export default Diet