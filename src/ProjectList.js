// @flow

import React, { Component } from 'react';
import './ProjectList.css';
import fitnessImg from './img/fitness.jpg';
import whiskeyImg from './img/whiskey.jpg';
import tanfImg from './img/tanf.jpg';
import povertyImg from './img/poverty.jpg';
import burgerImg from './img/burger.jpg';
import shaveImg from './img/shave.jpg';

export default class ProjectList extends Component {
  render() {
    return (
      <section className="ProjectList">
        <div className="ProjectList-Content">
          <div className="ProjectList-List">
            <div className="ProjectList-Item">
               <img className="ProjectList-Img" src={fitnessImg} alt="stationary cycles"/>
            </div>
            <div className="ProjectList-Item">
               <img className="ProjectList-Img" src={whiskeyImg} alt="a glass of whiskey"/>
            </div>
            <div className="ProjectList-Item">
               <img className="ProjectList-Img" src={tanfImg} alt="city skyline"/>
            </div>
            <div className="ProjectList-Item">
               <img className="ProjectList-Img" src={povertyImg} alt="children laughing"/>
            </div>
            <div className="ProjectList-Item">
               <img className="ProjectList-Img" src={shaveImg} alt="man shaving"/>
            </div>
            <div className="ProjectList-Item">
               <img className="ProjectList-Img" src={burgerImg} alt="hamburger"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
