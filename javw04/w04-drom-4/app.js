// Create Element'h2'
const newheading = document.createElement('h2');

// Add id
newheading.id = 'task-title';

// New text node
newheading.appendChild(document.createTextNode('Task list'));

// Get the old heading
const oldheading = document.getElementById('task-title');
//console.log("oldheading",oldheading);
//Parent
const cardActiond = document.querySelector('.card-action');

// Replace
cardActiond.replaceChild(newheading,oldheading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
//console.log(lis);
const list = document.querySelector('ul');
//console.log(list);
// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
console.log("firstLi",firstLi);
const link = firstLi.children[0];
let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
//console.log("link",link);
link.classList.remove('test');
val = link;
// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href','http://youtube.com');
link.setAttribute('title','youtube');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;
console.log(val);