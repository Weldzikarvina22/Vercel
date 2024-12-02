import React from "react";
import TodoItem from "./todoItem";

const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onRemove={() => onRemoveTodo(index)} />
        ))
      ) : (
        <p className="text-gray-500 text-center">No tasks yet. Add one!</p>
      )}
    </div>
  );
};

export default TodoList;
