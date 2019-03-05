let val;

// Number to string
val = string(555);
console.log("String(555) = ",val);

val - string(4+4);
console.log("string(4+4) = ",val);
// Bool to string
val = string(true);
console.log("string(true) = ",val);

// Date to string
val = string(new Date());
console.log("string(new Date) = ",val);

// Array to string
val = string([1,2,3,4]);
console.log("string([1,2,3,4]) = ",val);

// toString()
val = (5).toString();
console.log("(5).toString = ",val);

val = (true).tostring();
console.log("(true).tostring = ",val);

// String to number
val = Number('5');
console.log("Number('5') = ",val);

val = Number(ture);
console.log("Number(true)",val);

val = Number(false);
console.log("Number(false)",val);

val = Number(null);
console.log("Number(false)= ",val);

val = Number('Hello');
console.log("Number('Hello')= ",val);

val = Number([1,2,3]);
console.log("Number([1,2,3])= ",val);

val = parseInt('100.30');
console.log("ParseInt = ",val);

val = Parsefloat('100.30');
console.log("ParseFloat = ",val);
// parseInt & parseFloat

// Output {consol val & typeof val & val.length & val.to Fixed(2)}
console.log(val);

console.log(typeof val);
val = 'hello';
console.log("length = ",val.length);

val =100.123
console.log("toFixed(2) = ",val.toFixed(2));










