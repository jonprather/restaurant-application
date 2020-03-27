import React from 'react';
import { Link } from 'react-router-dom';

// import Directory from '../../components/directory/directory.component';

// import './Menu.scss
  
const Menu = () => (
  <div className='Menu'>
   
   <section id="food-preview">
                    <div className="container">
                      <div className="left-btn">
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                      </div>
                      <div className="right-btn">
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                      </div>
                      <div className="food-slider">
                        <div className="sliding-system">
                          <div className="slide">
                            <div className="background"></div>
                            <div className="content">
                              <div className="food-title">
                              <Link to= "/restaurant/menu/starters"> Starters </Link>
                              </div>
                              <p className="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div className="food-image">
                                <img src="/img/CHIPS.png"/>
                              </div>
                            </div>
                
                          </div>
                          <div className="slide">
                            <div className="background"></div>
                            <div className="content">
                              <div className="food-title">
                               <Link to= "/restaurant/menu/burgers"> Burgers </Link>
                              </div>
                              <p className="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div className="food-image">
                                <img src="/img/hamburger-and-fries-png-4.png"/>
                              </div>
                            </div>
                
                          </div>
                          <div className="slide">
                            <div className="background"></div>
                            <div className="content">
                              <div className="food-title">
                              <Link to= "/restaurant/menu/entrees"> Entrees </Link>
                              </div>
                              <p className="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div className="food-image">
                                <img src="/img/342-3422633_pork-entrees-steak-pork-png.png"/>
                              </div>
                            </div>
                
                          </div>
                          <div className="slide">
                            <div className="background"></div>
                            <div className="content">
                              <div className="food-title">
                              <Link to= "/restaurant/menu/sides"> Sides </Link>
                              </div>
                              <p className="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div className="food-image">
                                <img src="/img/Download-Salad-Transparent-PNG.png"/>
                              </div>
                            </div>
                
                          </div>
                          <div className="slide">
                            <div className="background"></div>
                            <div className="content">
                              <div className="food-title">
                              <Link to= "/restaurant/menu/desserts"> Desserts </Link>
                              </div>
                              <p className="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div className="food-image">
                                <img
                                  src="/img/Download-Cupcake-PNG-Transparent-Image-420x190.png"/>
                              </div>
                            </div>
                          </div>
                          <div className="slide">
                            <div className="background"></div>
                            <div className="content">
                              <div className="food-title">
                              <Link to= "/restaurant/menu/beers"> Beers </Link>
                              </div>
                              <p className="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div className="food-image">
                                <img
                                  src="/img/Download-Cupcake-PNG-Transparent-Image-420x190.png"/>
                              </div>
                            </div>
                          </div>
                          <div className="slide">
                            <div className="background"></div>
                            <div className="content">
                              <div className="food-title">
                                Drinks
                              </div>
                              <p className="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div className="food-image">
                                <img
                                  src="/img/Download-Cupcake-PNG-Transparent-Image-420x190.png"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                  </section>
  </div>
);
export default Menu;