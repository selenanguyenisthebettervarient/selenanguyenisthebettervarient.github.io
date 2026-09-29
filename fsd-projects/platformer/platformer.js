$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300, 600, 100, 30)
 createPlatform(500, 500, 300, 30)
 createPlatform(100, 700, 100, 30)
 createPlatform(300, 300, 100, 30)
 createPlatform(900, 400, 100, 30)
 createPlatform(700, 300, 100, 30)
 createPlatform(900, 600, 100, 30)
 createPlatform(1100, 500, 300, 30)
 createPlatform(100, 400, 100, 30)




    // TODO 3 - Create Collectables
createCollectable("grace", 300, 200, gravity)
 createCollectable("database", 900, 500, gravity)
 createCollectable("max", 1200, 400, gravity)



    
    // TODO 4 - Create Cannons
createCannon("right", 700, 2000)
 createCannon("top", 600, 2000)
 createCannon("top", 1100, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
