// destructuring with looping

const game = {
  suspects: [
    { name: "Rusty", color: "Orange" },
    { name: "Miss Scarlett", color: "Red" },
    { name: "Mr Plum", color: "purple" },
  ],
}

const [{ color: color1 }, { color: color2 }, { color: color3 }] = game.suspects
console.log(color1, color2, color3)
