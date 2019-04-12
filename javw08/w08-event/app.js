// document.querySelector('.clear-tasks').addEventListener('click', function(e){

// console.log('Hello World');

// //e.preventDefault();

// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
console.log(e);

let val;

val = e;

// Event target element(id, className, classlist)
//val = e.target;
//val = e.target.id;
//val = e.target.className;
//val = e.target.classList;

// Event type
//val = e.type;

//  // Timestamp
// val = e.timestamp/(1000*60);

// // Coords event relative to the window
val = e.clienty;
// val = e.cilentx;


// Coords event relative to the element
val = e.offsety;
// val = e.offsetx;

// console.log(val);

}