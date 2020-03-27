import React from 'react';


// import Directory from '../../components/directory/directory.component';

import './sidebar.style.scss';

const Info = () => (

<section id="information">
                      
                    <div className="restaurant-image">
                      <img src="img/top-down.jpg"/>
                    </div>
                    <div className="info">
                      <h2>We Started From The Bottom In 1987</h2>
                      <div className="paragraphs">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid dolore, error minus ad officia
                          fugit iusto repellat, explicabo reiciendis inventore mollitia non, libero perspiciatis dicta eius consequatur
                          et
                          similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid dolore, error minus ad
                          officia
                          fugit iusto repellat, explicabo reiciendis inventore mollitia non, libero perspiciatis dicta eius consequatur
                          et
                          similique!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid dolore, error minus ad officia
                          fugit iusto repellat, explicabo reiciendis inventore mollitia non, libero perspiciatis dicta eius consequatur
                          et
                          similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid dolore, error minus ad
                          officia
                          fugit iusto repellat, explicabo reiciendis inventore mollitia non, libero perspiciatis dicta eius consequatur
                          et
                          similique!</p>
                      </div>
                      <a href="#" className="about-link">
                        <span>Learn more about restaurants</span>
                        <div className="circle-right"><i className="fa fa-chevron-right" aria-hidden="true"></i></div>
                      </a>
                    </div>
                  </section>
                  )

                  export default Info;