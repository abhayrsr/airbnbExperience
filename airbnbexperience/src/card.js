import React from "react";
import image from 'C:/Users/acer/Documents/GitHub/airbnbExperience/airbnbexperience/public/images/airbnb 1.svg';
import star from './public/images/Star 1.svg';

export default function Card(props) {
    return (
        <div className = "card-container">
          <div className = "card">
            <img src = {image} className = "card--image" alt = "image1"/>
              <div className = "card--stats">
                <img src = {star} className = "star--image" alt = "star"/>
                <span>{props.rating}</span> 
                <span>{props.reviewCount}</span> 
                <span style = {{color: 'gray', marginLeft: '0.3rem'}}>{props.country}</span>
              </div>
            <p>{props.title}</p>
            <p><span style={{fontWeight: 'bold'}}>From {props.price}</span>/person</p>
          </div>
        </div>  
    )
}