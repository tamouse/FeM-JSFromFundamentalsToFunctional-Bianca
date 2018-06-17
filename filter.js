function filter(collection, callback) {
  let newCollection = []
  for (var i = 0; i < collection.length; i++) {
    if (callback(collection[i], i, collection)) {
      newCollection.push(collection[i])
    }
  }
  return newCollection
}

const colors = ["red", "blue", "green"]
function noGreen(color) {
  return color !== "green"
}

console.log(filter(colors, noGreen))
