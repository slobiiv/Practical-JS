var todos = ['item 1','item 2','item 3'];

todos.push('item 4'); // pushing(adding) value on the end of the list
todos.push('item 5'); 


// ACCESSING AN ITEM INSIDE ARRAY
todos[0]; // 'item 1'
todos[1]; // 'item 2'
todos[5]; // undefined (doesn't exist)

// CHANGING THE EXISTING ITEM'S VALUES
todos[0] = 'string 1';
todos[1] = 'string 2';
console.log(todos); //  ["string 1", "string 2", "item 3", "item 4", "item 5"]