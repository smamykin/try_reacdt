export const filters = [
    {name:'all'},
    {name:'new', check: (task) => !task.isDone},
    {name:'completed', check: (task) => task.isDone}
];
