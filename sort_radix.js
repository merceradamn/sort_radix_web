$(function(){
  console.log("Called the sorting js file properly.")

  // Canvas variables
  var canvWid = 1000
  var canvHei = 500

  // Create the canvas
  var paper = Raphael("sort", canvWid, canvHei)
  var border = paper.rect(0,0,canvWid,canvHei)  // Border of the canvas
  console.log("Created the canvas with size; Width: ",canvWid, "Height: ",canvHei)

  var sq = paper.rect(500,250,50,50,10)

  var callDraw = setInterval(function(){ sq = draw(paper, sq) }, 10)

})

function draw(paper, el) {
  // console.log("Draw.")

  console.log("X:",el.attrs["x"]," Y:",el.attrs["y"])
  el = paper.rect(el.attrs["x"]+1, el.attrs["y"],50,50,10)

  return el
}

// for (var a=[],i=0;i<40;++i) a[i]=i;
//
// // http://stackoverflow.com/questions/962802#962890
// function shuffle(array) {
//   var tmp, current, top = array.length;
//   if(top) while(--top) {
//     current = Math.floor(Math.random() * (top + 1));
//     tmp = array[current];
//     array[current] = array[top];
//     array[top] = tmp;
//   }
//   return array;
// }
//
// a = shuffle(a);
