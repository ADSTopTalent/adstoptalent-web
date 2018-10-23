import React, { Component } from "react";
import Slider from "react-slick";
import {Slide1,Slide2,Slide3,Slide4} from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true ,
      interval:1000

    };
    return (
      <div >  
        <Slider {...settings} >
              <div className="home-slider-one">
                <Slide1 />
              </div>
              <div className="home-slider-two">
               <Slide2 />
              </div>
              <div className="home-slider-three">
              <Slide3 />
              </div>
              <div  className="home-slider-four">
                <Slide4 />
              </div>
        </Slider>
      </div>
    );  }
}

export default SimpleSlider;