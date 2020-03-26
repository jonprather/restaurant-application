import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Hero from './hero.jsx';
import About from '../pages/about/about.jsx'
import Contact from '../pages/contact/contact.jsx'
import Offers from '../pages/offers/offers.jsx'
import Waitlist from '../pages/Waitlist/waitlist.jsx'
import Giftcards from '../pages/giftcards/giftcards.jsx'; //bailing on this section for now but will work the same

// import Directory from '../../components/directory/directory.component';

import './sidebar.style.scss';

const Sidebar = () => (
    
    <section id="welcome">
    {/* ok to do sepertae the menu from another part into intos own component or is this overkill .. 3-25-20 
    still just doing basic route orginaziton on front end via react router FE layout still buggy
    */}
    <div className="welcome-menu">
      <div className="logo">
      <Link to= '/'><img src="../img/clipart-restaurant-restaurant-logo-5.png"/>
        </Link>
      </div>
      <div className="menu">
        <div className="menu-title">
          Menu
        </div>
        <ul className="links">
        <li>
              <Link to= '/menu'>Menu</Link>
          </li>
          <li>
              <Link to= '/about'>About</Link>
            
          </li>
          <li>
          <Link to= '/waitlist'>Waitlist </Link>
          </li>
          <li>
          <Link to= '/offers'>Offers </Link>
          </li>
         
        </ul>
      </div>
      <div className="social-icons">
        <a href="#">
        {/* icons not showing up 3-25-20 after change to sidebar from welcome page so is it not getting bootstrap? idfk im just going to redo it */}
          {/* <i className="fa fa-facebook" aria-hidden="true"></i> */}
          <img class="fb-icon"  src="./img/fb.svg" alt="face book icon"/>
        </a>
        <a href="#">
        
        {/* <i className="fa fa-twitter" aria-hidden="true"></i> */}
        <img class="fb-icon"  src="./img/twt.svg" alt="twitter icon"/>
        </a>
        <a href="#"> <img class="fb-icon"  src="./img/insta.svg" alt="instagram icon"/></a>
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
    {/* this shit isnt sidebar should be something else i think */}
    <Switch>
        <Route exact path='/' component= {Hero} />
        <Route exact path='/about' component= {About} />
          <Route exact path='/offers' component= {Offers} />
        
          <Route exact path='/waitlist' component= {Waitlist} />
          <Route exact path='/contact' component= {Contact} />
     </Switch>

  </section>
  
);

export default Sidebar;
