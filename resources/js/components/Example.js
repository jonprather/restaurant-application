import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Sidebar from './sidebar.jsx';
import Hero from './Hero.jsx';
import {BrowserRouter} from 'react-router-dom';
import Restaurant from './aggregator';
import { Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../pages/admin/dashboard';





export default class Example extends Component {
    render() {
        return (
            <div className="container">
                {/* <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">I'm an example component!</div>
                           
                        </div>
                    </div>
                </div> */}
                {/* for plain index '/' can do hub and spoke link between restaurant and admin */}
                <Route path='/restaurant' render={props =>
  <div>
    <Sidebar/>
    <Restaurant/>
  </div>
  
} />
{/* // there may be multiple admin things i have to contend with  */}
<Route exact path ="/admin" component={Dashboard} />
               
                {/* so putting Restaurant here means we dont have to make a route since auto include it 
                further more can add routes here that must be restuarant to lood these else load the admin routes
                */}
                {/* <Hero/>  would be nice to seperate this from side bar so can do routing */}
                {/* <Main/> */}
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<BrowserRouter>
        <Example />
    </BrowserRouter>, document.getElementById('root'));
}
