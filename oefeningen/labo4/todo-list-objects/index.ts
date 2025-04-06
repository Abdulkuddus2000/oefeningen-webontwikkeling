import todoData from "./todos.json";

interface Todo{
    id: number,
    title: string,
    completed: boolean
}

const todo: Todo[] = todoData;

console.log(todo);

export {}