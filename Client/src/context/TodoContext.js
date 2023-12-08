import { useContext, createContext } from "react";

export const TodoContext = createContext({

    getTodos: () => {},
    handleSubmit: () => {},
    handleDelete: () => {},
    handleGetATodo: () => {},
    handleEditTodo: () => {},

});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

