// You can place functions inside objects

var gordon = {
  name : 'Gordon',
  sayName: function() { // This is a method. Method is a property which has a Function as a value. No name needed. Cause we call it by Property name
    console.log(this.name); // keyword this. will refer to entire object if you're not specific with it's usage. By using this.name, refers to a name property and it's value
  }
}