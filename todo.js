

//Initially take an prompt from user
let input = prompt('What would you like to do?');
//Have an array already with things
const todos = ['Collect eggs', 'Clean litter box'];

//First we make sure that when the user enters anything
//that is not quit we don't close the app.
while (input !== 'quit' && input !== 'q') {
    //If user enters list we display the items in array
    if (input === 'list') {
        console.log('*******************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1}: ${todos[i]}`);
        }
        console.log('*******************')
    //If new we add another item to array
    } else if (input === 'new') {
        //New prompt 
        const newToDo = prompt('Ok, what is the new todo?');
        //We use push to add to the end of array
        todos.push(newToDo);
        console.log(`${newToDo} added to list`);
    
     //If delete then we splice object at said index   
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, what is the index to delete?'));
        //Make sure a number was entered
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted}`);
        }
        else {
            console.log('Unknown index');
        }
    //This will keep looping until the user enters quit
    }
    input = prompt('What would you like to do?');
}
console.log('You quit the app');