// Variables that I want in scope everywhere
var list = new Array(0)
var numIntsToGenerate = 48

$(function(){
  console.log("Called the sorting js file properly.")

  // Canvas variables
  var canvWid = 1000
  var canvHei = 500

  var paper = Raphael("sort", canvWid, canvHei) // Create the canvas
  var border = paper.rect(0,0,canvWid,canvHei)  // Border of the canvas
  var sq = paper.rect(500,250,50,50,10)

  // Draw the number cells, empty
  var cells = paper.set() // Create the cell reference
  for(i=1;i<numIntsToGenerate+1;i++){
    cells.push(paper.rect(i*20,20,20,20))
  }
  // cells.attr({fill: "gray"})

  // var callDraw = setInterval(function(){ sq = draw(paper, sq) }, 10)

  $("#btn_new").on("click",function(){
    console.log("Clicked btn_new.")

    // Clean the list if we've already made one before
    if(list.length > 0)
        list = new Array(0)

    var minInt = 1; var maxInt = 1000;
    while(list.length < numIntsToGenerate){
        // Generate a number
        var newNum = Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt
        // console.log("Generated",newNum)
        // Check if number is already in the array
        if(!list.includes(newNum)){
          list.push(newNum);
          // console.log("Added",newNum,"to the list.")
        }
        else{
          console.log("Not a unique number.");
        }

    }

    // Print the array of numbers now
    console.log(list)

    // Draw the numbers in the cells
    console.log(cells)

  })

  $("#btn_sort").on("click",function(){
    console.log("Clicked btn_sort.")

    // Call the sort function to start the process

  })

  $("#btn_reset").on("click",function(){
    console.log("Clicked btn_reset.")

    // Reset everything back to the start

  })
})

function draw(paper, el) {
  // console.log("Draw.")

  console.log("X:",el.attrs["x"]," Y:",el.attrs["y"])
  el = paper.rect(el.attrs["x"]+1, el.attrs["y"],50,50,10)

  return el
}
