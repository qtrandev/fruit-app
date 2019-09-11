import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Fruit icons
import mango from '../icons/mango.svg';
import jackfruit from '../icons/durian.svg';
import longan from '../icons/lychee.svg';
import rambutan from '../icons/rambutan.svg';
import sugarapple from '../icons/custard-apple.svg';

const iconLookup = {
  "mango": mango,
  "jackfruit": jackfruit,
  "longan": longan,
  "rambutan": rambutan,
  "sugarapple": sugarapple
};

class FruitCardDisplay extends Component {
  render() {
    if (this.props.fruits.trim().length < 1) return (<div></div>);
    return (this.props.fruits.split(",").map(fruit => 
      <img src={iconLookup[fruit]} alt="fruit"></img>
    ));
  }
}

FruitCardDisplay.propTypes = {
  fruits: PropTypes.string.isRequired
}

export default FruitCardDisplay
