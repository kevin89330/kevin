const name = 'kobe';
const age = 19;
const job = 'Student';
const city = 'Taipei';
let html;

// Without template strings (es5)

html = '<ul>' +
       '<li> Name: '+ name +'</li>' +
       '<li> Age: '+ age +'</li>' +
       '<li> Job: '+ job +'</li>' +
       '<li> City: '+ city +'</li>' +
       '</ul>';

document.body.innerHTML = html;

function hello(){
    return 'hello';
}

// With template strings (es6)
html = `
   <ul>
      <li> Name: ${name} </li>
      <li> Age: ${age} </li> 
      <li> Job: ${job} </li> 
      <li> City: ${city} </li>
      <li> ${(age>=25 ? 'Over 25' : 'Under 25')} </li>
      <li> ${hello()} </li>
   </ul>    
`;
document.body.innerHTML = html;   