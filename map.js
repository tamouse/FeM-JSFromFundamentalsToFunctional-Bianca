map = (collection, callback) => {
  let newCollection = []
  for (var i = 0; i < collection.length; i++) {
    newCollection.push(callback(collection[i], i, collection))
  }
  return newCollection
}

const weapons = ["gun", "cannon", "tank"]

breakit = weapon => {
  return `broken ${weapon}`
}

console.log(map(weapons, breakit))
