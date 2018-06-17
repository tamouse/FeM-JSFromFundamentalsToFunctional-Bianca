const game = {
  suspects: [
    { name: "Rusty", color: "Orange" },
    { name: "Miss Scarlett", color: "Red" },
    { name: "Mr Plum", color: "purple" },
  ],
}

function foo(ary) {
  for (let i = 0; i < ary.length; i++) {
    console.log(ary[i].color)
  }
}

foo(game.suspects)
