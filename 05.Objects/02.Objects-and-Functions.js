// You can place functions inside objects

var gordon = {
  name : 'Gordon',
  sayName: function() { // This is a method. Property = Function called Method
    console.log(this.name); // keyword this. will refer to entire object if you're not specific with it's usage. By using this.name, refers to a name property and it's value
  }
}