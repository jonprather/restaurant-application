import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Hero from './Hero.jsx';
import About from '../pages/about/about.jsx'
import Contact from '../pages/contact/contact.jsx'
import Offers from '../pages/offers/offers.jsx'
import Waitlist from '../pages/Waitlist/waitlist.jsx'
import Menu from '../pages/menu/Menu.jsx'; //bailing on this section for now but will work the same
import MenuItem from './Menu-single-item';
import FoodPreview from './food-preview';
import Restaurant from './aggregator';


// import Directory from '../../components/directory/directory.component';

// import './sidebar.style.scss';
// import foodPreview from './food-preview';

const Sidebar = () => (
    <div>
    <section id="welcome">
    {/* ok to do sepertae the menu from another part into intos own component or is this overkill .. 3-25-20 
    still just doing basic route orginaziton on front end via react router FE layout still buggy
    */}
    <div className="welcome-menu">
      <div className="logo">
      <Link to= '/restaurant'><img src="../img/clipart-restaurant-restaurant-logo-5.png"/></Link>
      </div>
      <div className="menu">
        <div className="menu-title">
          Menu
        </div>
        <ul className="links">
        <li>
              <Link to= '/restaurant/menu'>Menu</Link>
          </li>
          <li>
              <Link to= '/restaurant/about'>About</Link>
            
          </li>
          <li>
          <Link to= '/restaurant/waitlist'>Waitlist </Link>
          </li>
          <li>
          <Link to= '/restaurant/offers'>Offers </Link>
          </li>
         
        </ul>
      </div>
      <div className="social-icons">
        <a href="#">
        {/* icons not showing up 3-25-20 after change to sidebar from welcome page so is it not getting bootstrap? idfk im just going to redo it */}
          {/* <i className="fa fa-facebook" aria-hidden="true"></i> */}
          <img className="fb-icon"  src="./img/fb.svg" alt="facebook icon"/>
        </a>
        <a href="#">
        
        {/* <i className="fa fa-twitter" aria-hidden="true"></i> */}
        <img className="fb-icon"  src="./img/twt.svg" alt="twitter icon"/>
        </a>
        <a href="#"> <img className="fb-icon"  src="./img/insta.svg" alt="instagram icon"/></a>
      </div>
      <div className="location">
        <div className="address">
          234 Main st,<br/>
          New York, New York 11747
        </div>
        <div className="phone-number">
          <a href="tel:7182198652">718-219-8652</a>
        </div>
      </div>
    </div>
 
 
    <Switch>
      
    {/* <Route path='/r' render={props =>
  <div>
    <Hero />
    <FoodPreview />
  </div>
} /> */}
{/* // not sure how to get multiple routes outputing without doing the above also its jank */}
{/* // ok so idea is to just rename the routes such that can have a /resturant/(:whatever) which is a match that allows this content 
 and also have the /admin that serves diff content ie just move up one level so the routes dont share the root index of '/'
 // so ill have to change the routes here as well as the links-
*/}
        {/* <Route exact path='/' component= {FoodPreview} />
        <Route exact path='/' component= {Hero} /> */}
        
        <Route exact path='/restaurant/' component= {Hero} />
       
        <Route exact path='/restaurant/about' component= {About} />
        <Route exact path='/restaurant/menu' component= {Menu} />
        <Route exact path='/restaurant/menu/:handle' component= {MenuItem} />
          <Route exact path='/restaurant/offers' component= {Offers} />
        
          <Route exact path='/restaurant/waitlist' component= {Waitlist} />
          <Route exact path='/restaurant/contact' component= {Contact} />
     </Switch>
     {/* <Route path='/restaurant' component= {Hero} /> */}

  </section>
  {/* <div> <Route exact path='/restaurant' component= {Restaurant} /></div> */}
  {/* ok so i want hero and restuarnt to load on path restauratn route prob is i want them to be in seperate sections/divs for layout  */}
  </div>
);

export default Sidebar;
