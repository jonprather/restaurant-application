import React, { Component } from 'react';
import Hero from './Hero.jsx';
import FoodPreview from './food-preview.jsx';
import Info from './information.jsx';
export default class Restaurant extends Component {
    render() {
        return (
            <div>
            {/* <Hero/> */}
            <FoodPreview/>
            <Info/>
            </div>
        )
    }

}
