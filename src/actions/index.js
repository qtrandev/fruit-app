let fruitId = 1

export const addFruit = (name, image, desc) => ({
  type: 'ADD_FRUIT',
  id: fruitId++,
  name,
  image,
  desc
})