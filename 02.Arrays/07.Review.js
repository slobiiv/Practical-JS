// V1

// It should have a place to store to-dos
    var tasks = ['identify the subject','teach it to a child', 'identify your knowledge gaps','organize-simplify-tell a story'];

// It should have a way to display to-dos
    console.log('My tasks: ', tasks); // My tasks : ["identify the subject", "teach it to a child", "identify your knowledge gaps", "organize-simplify-tell a story"]

// It should have a way to add new to-dos
    tasks.push('focus on solving problems'); //  ["identify the subject", "teach it to a child", "identify your knowledge gaps", "organize-simplify-tell a story", "focus on solving problems"]

// It should have a way to change a to-do
    tasks[5] = 'have fun'; // ["identify the subject", "teach it to a child", "identify your knowledge gaps", "organize-simplify-tell a story", "focus on solving problems", "have fun"]

// It should have a way to delete a to-do
    tasks.splice(4,2); // deleting last two items