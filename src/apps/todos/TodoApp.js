import React from 'react';
import './todo-style.scss';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoState from './TodoState';

export const TodoApp = () => {
  return (
    <TodoState>
      <div className="container flex flex-col mt-4 todo-context">
        <h2 className="text-center">Todo App With Context</h2>
        <TodoForm />
        <div className="flex flex-col mt-4">
          <TodoList />
        </div>
      </div>
    </TodoState>
  );
};
