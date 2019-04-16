// document.getElementsByclassName

let items = document.getElementsByClassName('collection-item');
console.log(items);

console.log(items[0]);

items[0].style.color = 'red';
items[3].textContent = 'Hello';
items[4].innerHTML = '<h3> Hello </h3>';

items = document.querySelector('u1').getElementsByClassName('collection-item');

// let lis = document.getElementsByTagName('li');

// console.log(lis[0]);

// // convert Html collection into array

// let lis2 = Array.from(lis2);

// lis2.reverse();

// lis2.forEash(function (li,index){
//     console.log(li.className);
//     li.textContent = `${index}:Hello`;

// });
//document.querySelectorAll

item = document.querySelectorAll('ul.collection li.collection-item');

item.forEach(function(li, index){
    li.textContent = `${index}:Hello`;

});

const lisOdd = document.querySelectorAll('li:nth-child(odd)');

lisOdd.forEach(function(li){
    li.style.background = '#ccc';

});

const lisEven = document.querySelectorAll('li:nth-child(even)');

for(let i=0; i<lisEven.length; i++){
    lisEven[i].style.background = '#f4d4d4';
}