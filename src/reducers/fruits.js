let initial = [
  { 
    id: 100,
    name: 'Rambutan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rambutans.JPG/920px-Rambutans.JPG',
    desc: 'Rambutans are delicious!',
    enabled: false
  },
  { 
    id: 101,
    name: 'Jackfruit',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Jackfruit_hanging.JPG',
    desc: 'Jackfruits are the best!',
    enabled: false
  },
  { 
    id: 102,
    name: 'Longan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Dimocarpus_longan_fruits.jpg',
    desc: 'Longans are sweet and tasty!',
    enabled: true
  },
  { 
    id: 103,
    name: 'Sugar-apple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Sugar_apple_with_cross_section.jpg',
    desc: 'Sugar-apples are tasty and custardy!',
    enabled: false
  }
];

const fruits = (state = initial, action) => {
    switch (action.type) {
      case 'ADD_FRUIT':
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            image: action.image,
            desc: action.desc,
            enabled: action.enabled
          }
        ]
      case 'ENABLE_FRUIT':
        return state.map(fruit =>
          (fruit.id === action.id)
            ? {...fruit, enabled: !fruit.enabled}
            : fruit
        )
      default:
        return state
    }
  }
  
export default fruits