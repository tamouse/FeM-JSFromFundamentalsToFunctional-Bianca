const _ = {}

_.each = (list, cb) => {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      cb(list[i], i, list)
    }
  } else {
    for (let key in list) {
      cb(list[key], key, list)
    }
  }
}

_.map = (list, cb) => {
  let map = []
  _.each(list, (item, index, collection) => {
    map.push(cb(item, index, collection))
  })
  return map
}

const colors = ["red", "green", "blue"]

function makePaints(color, id) {
  return {
    id,
    name: color,
    bigName: color.toUpperCase(),
    size: color.length,
  }
}

console.log(_.map(colors, makePaints))
