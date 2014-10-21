
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

window.Conway = (function (){
  // import dependencies
  var Engine = famous.core.Engine;
  var Modifier = famous.core.Modifier;
  var Transform = famous.core.Transform;
  var Surface = famous.core.Surface;
  var GridLayout = famous.views.GridLayout;
  var StateModifier = famous.modifiers.StateModifier;

  // create the main context
  var mainContext = Engine.createContext();

  var rows = 10;
  var columns = 10;

  // create the container to hold the grid
  var containerModifier = new StateModifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
    size: [200, 200]
  });

  // setup the grid layout
  var grid = new GridLayout({
    size: [100, 100],
    dimensions: [rows, columns]
  });

  // var dead = "#354B60";
  // var alive = "#27ae60";

  // var initialColor = dead;

  // create surfaces array
  var surfaces = [];

  // Sets the collection of renderables under the Gridlayout instance's control.
  grid.sequenceFrom(surfaces);

  initWorld = function() {
    for(var i = 0; i < (rows * columns); i++) {
      var cellName = "cell" + i.toString();
      var str = "surface" + i.toString();

      str = new Surface({
        size: [undefined, undefined],
        classes: [cellName],
        properties: {
          border: "1px solid #000"
        }
      });

      surfaces.push(str);
      // console.warn(str.classList[0]);

      if (str.classList[0] === "cell33") {
        str.addClass("yellow");
      }

      cellName = "";
    }
  }

  mainContext.add(containerModifier).add(grid);

  initWorld();

})();