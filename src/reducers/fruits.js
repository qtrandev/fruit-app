let initial = [
  { 
    id: 100,
    name: 'Mango',
    selection: 'mango',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Mango_Maya.jpg',
    desc: 'Mangos are super sweet!',
    enabled: true
  },
  { 
    id: 101,
    name: 'Jackfruit',
    selection: 'jackfruit',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Jackfruit_hanging.JPG/100px-Jackfruit_hanging.JPG',
    desc: 'Jackfruits are the best!',
    enabled: false
  },
  { 
    id: 102,
    name: 'Longan',
    selection: 'longan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dimocarpus_longan_fruits.jpg/100px-Dimocarpus_longan_fruits.jpg',
    desc: 'Longans are sweet and tasty!',
    enabled: false
  },
  { 
    id: 103,
    name: 'Rambutan',
    selection: 'rambutan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rambutans.JPG/100px-Rambutans.JPG',
    desc: 'Rambutans are delicious!',
    enabled: false
  },
  { 
    id: 104,
    name: 'Sugar-apple',
    selection: 'sugarapple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Sugar_apple_with_cross_section.jpg/100px-Sugar_apple_with_cross_section.jpg',
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
            selection: action.selection,
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