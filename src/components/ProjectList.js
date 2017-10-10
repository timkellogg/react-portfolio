// @flow

import React from 'react';
import './ProjectList.css';

import fitnessImg from '../assets/img/fitness.jpg';
import whiskeyImg from '../assets/img/whiskey.jpg';
import tanfImg    from '../assets/img/tanf.jpg';
import povertyImg from '../assets/img/poverty.jpg';
import burgerImg  from '../assets/img/burger.jpg';
import shaveImg   from '../assets/img/shave.jpg';

export default () => {
  return (
    <section className="ProjectList">
      <div className="panel-content">
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
