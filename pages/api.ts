import { promises } from "fs";
import { Task } from "./types";

//jsonからデータをとる
export const getAllTodos =async () : Promise<Task[]>=> {
    const res = await fetch('http://localhost:3001/tasks', { cache: "no-store"});//SSR
    const todos = res.json();

    return todos;
};  

//入力した内容をPOSTする
export const addTodo = async (todo: Task) : Promise<Task[]>=> {
    const res = await fetch('http://localhost:3001/tasks', { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),//json形式なので変更する
    });
    const newTodo = res.json();

    return newTodo;
}; 

//編集する
export const editTodo = async (id: string, newText: string) : Promise<Task[]>=> {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, { 
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newText}),//json形式なので変更する
    });
    const uppdatedTodo = res.json();
    
    return uppdatedTodo;
};  

//削除する
export const deleteTodo = async (id: string) : Promise<Task[]>=> {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, { 
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const deleteTodo = res.json();
    
    return deleteTodo;
};  