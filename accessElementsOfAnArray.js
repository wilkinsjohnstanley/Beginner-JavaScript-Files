const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist at',
        isCompleted: false
    },
];

//todo could be called anything, it:s a new variable. Access elements with a dot. 
for(let todo of todos){
    console.log(todo);
    console.log(todo.text);
    console.log(todo.id);
    console.log(todo.isCompleted);
}
