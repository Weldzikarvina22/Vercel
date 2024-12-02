import React from "react";

const TodoItem = ({ todo, onRemove }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-4 py-2 mb-2 rounded-md">
      <span className="text-gray-700">{todo}</span>
      <button
        onClick={onRemove}
        className="text-red-500 hover:text-red-600 font-bold"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
