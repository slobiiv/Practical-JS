var myName = 'Gordon'; // Global scope

function sayName() {
  var secret = 'watch-and-code';
  console.log(myName);
}
sayName(); // 'Gordon'
console.log(secret); // Error:8 Uncaught ReferenceError: (local scope)

/* 
  If you're inside of a function, you can look out and see data(global scope variables), 
  but the opposite isn't true. If you're outside, you can't look in.
*/

