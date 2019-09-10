import React, { Component } from 'react'
import mango from '../icons/mango.svg';
import jackfruit from '../icons/durian.svg';
import longan from '../icons/lychee.svg';
import rambutan from '../icons/rambutan.svg';
import sugarapple from '../icons/custard-apple.svg';

const iconLookup = [
  ["mango", mango],
  ["jackfruit", jackfruit],
  ["longan", longan],
  ["rambutan", rambutan],
  ["sugarapple", sugarapple]
];

const returnFruits = (fruits) => {
  let fruitStrings = fruits.split(",");
  let fruitList = [];
  for (let i=0; i<fruitStrings.length; i++){
    for (let j=0; j<iconLookup.length; j++){ 
      if (fruitStrings[i] === iconLookup[j][0]) {
        fruitList.push(iconLookup[j][1]);
        break;
      }
    }
  }

  return (
    <div>
      {fruitList.map(fruit => 
        <img src={fruit} alt="Fruit"></img>
      )}
    </div>
  )
}

class FruitCardDisplay extends Component {

  render() {
    return (
      <div>
        {returnFruits(this.props.fruits)}
      </div>
    )
  }
}

export default FruitCardDisplay
