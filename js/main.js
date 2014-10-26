
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

window.Conway = (function (){
  // import dependencies
  var Engine = famous.core.Engine
  var Modifier = famous.core.Modifier
  var Transform = famous.core.Transform
  var Surface = famous.core.Surface
  var GridLayout = famous.views.GridLayout
  var StateModifier = famous.modifiers.StateModifier
  var Timer    = famous.utilities.Timer

  // create the main context
  var mainContext = Engine.createContext()

  var rows = 10
  var columns = 10

  // create the container to hold the grid
  var containerModifier = new StateModifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
    size: [200, 200]
  })

  // setup the grid layout
  var grid = new GridLayout({
    size: [100, 100],
    dimensions: [rows, columns]
  })

  var dead = "#354B60";
  var alive = "#27ae60";

  // var initialColor = dead;

  // create surfaces array
  var surfaces = []

  // Sets the collection of renderables under the Gridlayout instance's control.
  grid.sequenceFrom(surfaces)


  for(var i = 0; i < (rows * columns); i++) {
    var cellName = "cell" + i.toString()

    var color = i % 2 ? alive : dead

    var str = new Surface({
      content: i,
      size: [undefined, undefined],
      classes: [cellName],
      properties: {
        border: "1px solid #000",
        backgroundColor: color
      }
    })

    // var cell = str.classList[0]

    // build glider
    // if (cell === "cell25" || cell === "cell33" || cell === "cell35" || cell === "cell45" || cell === "cell44") {
    //   str.addClass("yellow")
    // }


    surfaces.push(str)
  }

  surfaces[99].setProperties({backgroundColor: "red"})

  Timer.setInterval(function() {
      // surface.setContent('this function has run ' + ++counter + ' time(s)')
  }, 1000);

  mainContext.add(containerModifier).add(grid)

})()