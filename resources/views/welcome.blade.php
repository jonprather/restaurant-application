<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
            <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>RESTaurant</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
        {{-- <script src="{{ asset('js/lib.js') }}"></script> --}}
       
        <!-- Styles -->
        <style>
            
        </style>
        
    </head>
    <body>
            
                    
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
               
              
                <div id="root"></div> 



                {{-- coding phase based html may cut into react components later --}}

                 
                  <section id="information">
                      
                    <div class="restaurant-image">
                      <img src="img/top-down.jpg">
                    </div>
                    <div class="info">
                      <h2>We Started From The Bottom In 1987</h2>
                      <div class="paragraphs">
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
                      <a href="#" class="about-link">
                        <span>Learn more about restaurants</span>
                        <div class="circle-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                      </a>
                    </div>
                  </section>
                  <section id="food-preview">
                    <h2>We have everything you need to kill your hunger</h2>
                    <div class="button-rounded">View Our Menu</div>
                    <div class="container">
                      <div class="left-btn">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                      </div>
                      <div class="right-btn">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </div>
                      <div class="food-slider">
                        <div class="sliding-system">
                          <div class="slide">
                            <div class="background"></div>
                            <div class="content">
                              <div class="food-title">
                                Starters
                              </div>
                              <p class="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div class="food-image">
                                <img src="/img/CHIPS.png">
                              </div>
                            </div>
                
                          </div>
                          <div class="slide">
                            <div class="background"></div>
                            <div class="content">
                              <div class="food-title">
                                Burgers
                              </div>
                              <p class="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div class="food-image">
                                <img src="/img/hamburger-and-fries-png-4.png">
                              </div>
                            </div>
                
                          </div>
                          <div class="slide">
                            <div class="background"></div>
                            <div class="content">
                              <div class="food-title">
                                Entrees
                              </div>
                              <p class="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div class="food-image">
                                <img src="/img/342-3422633_pork-entrees-steak-pork-png.png">
                              </div>
                            </div>
                
                          </div>
                          <div class="slide">
                            <div class="background"></div>
                            <div class="content">
                              <div class="food-title">
                                Sides
                              </div>
                              <p class="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div class="food-image">
                                <img src="/img/Download-Salad-Transparent-PNG.png">
                              </div>
                            </div>
                
                          </div>
                          <div class="slide">
                            <div class="background"></div>
                            <div class="content">
                              <div class="food-title">
                                Deserts
                              </div>
                              <p class="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div class="food-image">
                                <img
                                  src="/img/Download-Cupcake-PNG-Transparent-Image-420x190.png">
                              </div>
                            </div>
                          </div>
                          <div class="slide">
                            <div class="background"></div>
                            <div class="content">
                              <div class="food-title">
                                Beers
                              </div>
                              <p class="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div class="food-image">
                                <img
                                  src="/img/Download-Cupcake-PNG-Transparent-Image-420x190.png">
                              </div>
                            </div>
                          </div>
                          <div class="slide">
                            <div class="background"></div>
                            <div class="content">
                              <div class="food-title">
                                Drinks
                              </div>
                              <p class="food-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis iste ab deleniti cupiditate
                                architecto
                                officia aspernatur nulla iusto delectus doloremque possimus recusandae, reiciendis aliquam vel voluptas
                                repellendus natus nihil?
                              </p>
                              <div class="food-image">
                                <img
                                  src="/img/Download-Cupcake-PNG-Transparent-Image-420x190.png">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                  </section>
                  {{-- <div id="root">    </div> --}}
                  {{-- LUL this needs to be above the script so script can find the id --}}
                <script src="{{mix('js/app.js')}}" ></script>
                
                 {{-- <script src="{{ asset('js/app.js') }}"></script> --}}
            {{-- </div>
        </div> --}}
        
    </body>
</html>
