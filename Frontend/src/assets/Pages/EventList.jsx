    import React from 'react';
    import { Link } from 'react-router-dom';
    import '../Css/EventList.css';
    import Footer from './Footer';
import Navbar from './Navbar';
    const ProductPage = () => {
    return (
        <div>  <Navbar />
                <br></br><br></br><br></br><br></br>
       <div className="product-container">
  <div className="product">
    <br />
    <img src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg" alt="Product" />
    <div className="details">
      <h3>Birthday Party Silver</h3>
      <p>Events , Parties , Meetings ,Meetups ,Clubs</p>
      <p>Package Price : 10,000 ₹</p>
      <Link to="/eventdisplay">View</Link>
    </div>
  </div>
  
  <div className="product">
    <img src="https://www.tamarindglobal.com/images/events/events.jpg" alt="Product" />
    <div className="details">
      <h3>Birthday Party Silver Plus</h3>
      <p>Events , Parties , Meetings ,Meetups ,Clubs</p>
      <p>Package Price : 20,000 ₹</p>
      <Link to="/product/2">View</Link>
    </div>
  </div>
  
  <div className="product">
    <br />
    <img src="https://www.rockstarevents.in/uploads/gallery/rockstar-events-29122019015718.jpg" alt="Product" />
    <div className="details">
      <h3>Birthday Party Gold</h3>
      <p>Events , Parties , Meetings ,Meetups ,Clubs</p>
      <p>Package Price : 30,000 ₹</p>
      <Link to="/eventdisplay">View</Link>
    </div>
  </div>
  
  <div className="product">
    <img src="https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-Company-In-Mumbai.jpg" alt="Product" />
    <div className="details">
      <h3>Birthday Party Gold Plus</h3>
      <p>Events , Parties , Meetings ,Meetups ,Clubs</p>
      <p>Package Price : 40,000 ₹</p>
      <Link to="/product/2">View</Link>
    </div>
  </div>
  
  <div className="product">
    <br />
    <img src="https://i0.wp.com/www.thebigday.co.in/wp-content/uploads/2021/01/Corporate-Events.jpg?fit=1500%2C700&ssl=1" alt="Product" />
    <div className="details">
      <h3>Birthday Party Platinum</h3>
      <p>Events , Parties , Meetings ,Meetups ,Clubs</p>
      <p>Package Price : 50,000 ₹</p>
      <Link to="/eventdisplay">View</Link>
    </div>
  </div>
  
  <div className="product">
    <img src="https://www.inclusion-europe.eu/wp-content/uploads/2019/01/inclusion-europe-whatwedo-events-scaled.jpg" alt="Product" />
    <div className="details">
      <h3>Birthday Party Platinum Plus</h3>
      <p>Events , Parties , Meetings ,Meetups ,Clubs</p>
      <p>Package Price : 60,000 ₹</p>
      <Link to="/product/2">View</Link>
    </div>
  </div>
  
  <div className="product">
    <img src="https://www.gohawaii.com/sites/default/files/hero-unit-images/MH_01065-Annual%20Events%20and%20Festivals.jpg" alt="Product" />
    <div className="details">
      <h3>Birthday Party Platinum Premium</h3>
      <p>Events , Parties , Meetings ,Meetups ,Clubs</p>
      <p>Package Price : 70,000 ₹</p>
      <Link to="/product/3">View</Link>
    </div>
  </div>
  
  <div className="product">
    <br />
    <img src="https://nsquares.in/wp-content/uploads/2022/04/fe-30.jpg" alt="Product" />
    <div className="details">
      <h3>Birthday Party Diamond</h3>
      <p>Events , Parties , Meetings ,Meetups ,Clubs</p>
      <p>Package Price : 80,000 ₹</p>
      <Link to="/eventdisplay">View</Link>
    </div>
  </div>
  
  <div className="product">
    <img src="https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526_640.jpg" alt="Product" />
    <div className="details">
      <h3>Birthday Party Diamond Plus</h3>
      <p>Events , Parties , Meetings ,Meetups ,Clubs</p>
      <p>Package Price : 90,000 ₹</p>
      <Link to="/product/2">View</Link>
    </div>
  </div>
  
  <div className="product">
    <img src="https://content.jdmagicbox.com/comp/pune/n2/020pxx20.xx20.191117194212.f6n2/catalogue/shree-samarth-events-pimple-saudagar-pune-balloon-decorators-1yj4rg1yr8.jpg" alt="Product" />
    <div className="details">
      <h3>Birthday Party Diamond Premium</h3>
      <p>Events , Parties , Meetings ,Meetups ,Clubs</p>
      <p>Package Price : 100,000 ₹</p>
      <Link to="/product/3">View</Link>
    </div>
  </div>
</div>

        <Footer /> <br></br>  
        </div>
    );
    };

    export default ProductPage;
