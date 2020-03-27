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

                 
                  {{-- information section --}}

                  {{-- food preview section cut from here  --}}
                  {{-- <div id="root">    </div> --}}
                  {{-- LUL this needs to be above the script so script can find the id --}}
                <script src="{{mix('js/app.js')}}" ></script>
                
                 {{-- <script src="{{ asset('js/app.js') }}"></script> --}}
            {{-- </div>
        </div> --}}
        
    </body>
</html>
