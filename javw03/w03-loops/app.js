// FOR LOOP
for(let i=1;i<=5;i++){
 console.log("Number "+i);
}
// WHILE LOOP
let i = 1;
while(i<=5){
    console.log("Number "+i);
    i++;
}

// DO WHILE
let j = 1;
do{
    console.log("Number "+j);
    j++
}while(j<=5);

// LOOP THROUGH ARRAY
const Name = ['Kobe','James','George','Irving'];
for(let i=0;i<Name.length;i++){
    console.log(Name[i]);
}

// FOREACH
Name.forEach(function(Name,index, array){
    console.log(`${index}: ${Name}`);
    console.log(array);
});

// MAP
const users = [
    {
        id: 1,
        name: 'Kobe'
    },
    {
        id: 2,
        name: 'James'
    },
    {
        id: 3,
        name: 'George'
    } 
];
const ids = users.map(function(user){
    return user.id;
});
console.log(ids);

// FOR IN LOOP

const user = {
    firstName:'Kobe',
    lastName:'bryant',
    age: 19
}
for(let x in user){
    console.log(`${x}: ${user[x]}`);
}


