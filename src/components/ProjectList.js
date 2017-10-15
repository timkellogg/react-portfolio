// @flow

import React, { Component } from 'react';
import './ProjectList.css';

import fitnessImg from '../assets/img/fitness.jpg';
import whiskeyImg from '../assets/img/whiskey.jpg';
import tanfImg    from '../assets/img/tanf.jpg';
import povertyImg from '../assets/img/poverty.jpg';
import shaveImg   from '../assets/img/shave.jpg';
import burgerImg  from '../assets/img/burger.jpg';

const images = [
  { image: fitnessImg, alt: 'woman exercising' },
  { image: whiskeyImg, alt: 'bar' },
  { image: tanfImg, alt: 'office building' },
  { image: povertyImg, alt: 'poor children' },
  { image: burgerImg, alt: 'burger' },
  { image: shaveImg, alt: 'old salon' },
];

export default class ProjectList extends Component {

  onHover() {
    debugger
  }

  renderImages() {
    const component = this;

    return images.map((data, index) => {
      return (
        <div key={index} className="ProjectList-Item">
          <img
            onMouseEnter={component.onHover.bind(component)}
            className="ProjectList-Img"
            src={data.image}
            alt={data.alt}
          />
        </div>
      )
    });
  }

  render() {
    return (
      <section className="ProjectList">
        <div className="panel-content" >
          <div className="ProjectList-List">
            {this.renderImages()}
          </div>
        </div>
      </section>
    );
  }
}
