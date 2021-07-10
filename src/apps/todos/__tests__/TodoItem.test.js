// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import TodoLocalState from '../useLocalStorage/TodoLocalState';
import { TodoItem } from '../useLocalStorage/TodoItem';

describe('<ToDoItem/>', () => {
  const item = { title: 'Clean the pot' };

  it('Renders without crashing', () => {
    const todo = render(
      <TodoLocalState>
        <TodoItem todo={item} />
      </TodoLocalState>,
    );
    expect(todo.getByText(/clean the pot/i)).toBeInTheDocument();
  });

  it('Renders the text from the prop', () => {
    const { getByTestId } = render(
      <TodoLocalState>
        <TodoItem todo={item} />
      </TodoLocalState>,
    );
    expect(getByTestId('todo-text').textContent).toBe(item.title);
  });

  it('Renders a delete button', () => {
    const { getByTestId } = render(
      <TodoLocalState>
        <TodoItem todo={item} />
      </TodoLocalState>,
    );
    expect(getByTestId('delete-button')).toBeInTheDocument();
  });
});
