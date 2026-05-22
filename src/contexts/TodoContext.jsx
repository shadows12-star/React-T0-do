import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[

        {
            id:1,
            title:"Learn React",
            completed:false
        },
        {
            id:2,
            title:"Learn Tailwind",
            completed:false
        },
        {
            id:3,
            title:"Build a Todo App",
            completed:false
        }

    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    togglecompleted:(id)=>{}
});


export const usetodo = ()=>{
     return useContext(TodoContext);
     
}

export const Todoprovider =TodoContext.Provider;
