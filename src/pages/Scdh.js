import React from "react"
import Layout from "../component/Layout/Layout"
import DateRangeIcon from '@mui/icons-material/DateRange';
const Scdh = () => {
  return (
    <Layout>
      <>
     

  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">


<img class="bd-placeholder-img" width="100%" height="100%" src="https://blog.trello.com/hubfs/download%20(95).png" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

      <div class="container">
        <div class="carousel-caption text-end">
          <h1 class="text-white">SCHEDULE </h1>
          <h5><i class="text-white"> You’ve made the decision that now is the time to start yoga.</i></h5>
          
        </div>
      </div>
    </div>
    </div>
    </div>
    <hr style={{ margin: "40px 0" }} />
    <div className="container my-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h6 className="text-primary">Yogmaya</h6>
      <h2 className="text-md"><i>What schedule is best when you are a beginner? </i></h2>
       <p className="text-muted"><i>
      Always consult your doctor if you have any concerns
      </i></p> 
    </div>
      <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              <span className="text-muted">1.Set a Goal </span>
            </h2>
            <p className="lead">
            <i className="text-muted"> "Goals give you something to focus on and make your wants more tangible. As a beginner, set a 1-month goal to complete 10-12 classes. This is specific, measurable, achievable, realistic and timely. And it will help you build momentum.Whether you’re a seasoned yoga practitioner or you’ve literally just bought your very first yoga mat, establishing obtainable goals is pivotal to getting the most out of your practice. Start by asking yourself what it is you want yoga to do for you. Do you want it to bring you less stress? Do you want to increase your flexibility? Do you want to be able to do a handstand?"</i>
            </p>
           
          </div>
          <div className="col-md-5">
            <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://images.squarespace-cdn.com/content/v1/5c366bcf71069910811195f8/1559842185151-53JQNT3TAIAR9S330KB5/goals.gif?format=1500w" />
          </div>
        </div>

        <hr className="featurette-divider" style={{margin: "40px"}}></hr>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
            
              <span className="text-muted">2.Schedule it </span>
            </h2>
            <p className="lead">
           <i className="text-muted">"
           Put the times you are going to practice yoga on your calendar. It provides a visual reminder and serves as a commitment you have made to yourself.. Making a yoga date with others makes it more social and supportive. But don’t worry if you can’t think of anyone who might want to go, you can join a yoga studio. One of the reasons why yoga studios are popular is that they are communities. You’ll find the same people practice at the same time on the same day. And as you discover your routine you’ll meet others who will become friends"</i>
            </p>
            
          </div>
          <div className="col-md-5 order-md-1">
          <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://media2.giphy.com/media/h5FIFDs6rXLpWlWWZJ/giphy.gif?cid=790b7611de9d379fb50fa261d90e191d45fd649894ddd015&rid=giphy.gif&ct=g" />
          
          </div>
        </div>
        <hr className="featurette-divider" style={{margin: "40px"}}></hr>

<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">
   <span className="text-muted">3.Bring the Fun</span>
    </h2>
    <p className="lead">
      <i className="text-muted">"Find a class that you enjoy and consider fun. You’re putting the power of psychology to work for you; if it’s fun, you’ll want to keep doing it.One more plug for psychology—give yourself an incentive.Next time you have to hold a challenging pose, try the simple act of curling the corners of the mouth up into a smile and I guarantee, you will immediately start to enjoy the experience more. Set up a reward system for when you finish a week of classes or your first month. Having something to look forward to is motivating.
 "</i>
    </p>
    
    
  </div>
  <div className="col-md-5">
  <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="https://blog.yogamatters.com/wp-content/uploads/2020/04/Florence-for-Kids-Yoga-Blog.jpg" />
  </div>
</div>
</div>
<hr style={{ margin: "40px 0" }} />

    <div className="container my-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h6 className="text-primary">Yogmaya</h6>
      <h2 className="text-md"><DateRangeIcon  fontSize="large"> </DateRangeIcon> <i>SCHEDULE</i></h2>
      
    </div>
        
    <div class="table-responsive container">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">MONDAY</th>
      <th scope="col">TUESDAY</th>
      <th scope="col">WEDNESDAY</th>
      <th scope="col">THURSDAY</th>
      <th scope="col">FRIDAY</th>
      <th scope="col">SATURDAY</th>
      <th scope="col">SUNDAY</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-danger">
      <th scope="row">1</th>
      <td>STRENGTH AND FLEXIBILITY(30min)</td>
      <td>YOGA AND CARDIO(60 min)</td>
      <td>MOTION IS LOTION(30 min)</td>
      <td>YOGA STRENGTH(30 min)</td>
      <td>YIN YOGA FOR HIPS AND LOWER BACK(30 min)</td>
      <td>REST DAY(walk, cycle, meditate, do chores)</td>
      <td>TOTAL BODY YOGA AND CORE(40min)</td>
    </tr>
    <tr class="table-success">
      <th scope="row">2</th>
      <td>MORNING STRETCH(10min)POWER YOGA(20 min)</td>
      <td>STRETCH THE STRESS OUT(30 min)</td>
      <td>POWER YOGA(30 min)</td>
      <td>CARDIO BURN(30 min)</td>
      <td>YOGA FOR BALANCE(35 min)</td>
      <td>DEEP STRECH YOGA(45 min)</td>
      <td>REST DAY(walk, cycle, meditate,do chores)</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">3</th>
      <td>POWER VINYASA(45 min)</td>
      <td>YOGA DETOX(30 min)</td>
      <td>FEEL GOOD FLOW(20 min)</td>
      <td>FAT BURNING YOGA(30 min)</td>
      <td>SEATED YOGA(45 min)</td>
      <td>IMPROVE YOUR BALANCE(30 min)</td>
      <td>REST DAY(walk, cycle, meditate, do chores)</td>
    </tr>
    <tr class="table-success">
      <th scope="row">4</th>
      <td>TOTAL BODY YOGA(30 min)</td>
      <td>BACKBEND INFUSED FLOW(60 min)</td>
      <td>GENTLE YOGA(30 min)</td>
      <td>CORE STRENGTH YOGA(30 min)</td>
      <td>BEACH YOGA HIIT WORKOUT(30 min)</td>
      <td>YIN YOGA AT THE WALL(30 min)</td>
      <td>MORNING FLOW(15 min)ENERGIZING YOGA(10 min)</td>
    </tr>
    
  </tbody>
</table>


 </div>
    </>
  </Layout>
  )
}
export default Scdh
