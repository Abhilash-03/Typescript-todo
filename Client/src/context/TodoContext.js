import { useContext, createContext } from "react";

export const TodoContext = createContext({

    getTodos: () => {},
    handleSubmit: () => {},
    handleDelete: (id) => {},
    handleGetATodo: (id) => {},
    handleEditTodo: (id) => {},

});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

