import { useCallback, useEffect, useState } from 'react';
import { TodoList } from './TodoList';
import { COLLECTION_TODOS } from '../config';
import { useGetDataAll } from '../hooks/useFirebase';

const TodoContainer = ({ data }) => {
  const [todos, setTodos] = useState(data);

  const onChangeStatus = useCallback(
    (postID) => (status) => {
      setTodos((_todos) => {
        const todos = [..._todos];
        const updateItemIndex = todos.findIndex((item) => item.id === postID);
        console.log('onChangeStatus >', todos[updateItemIndex]);
        /*
        const newTodos = [
          ...todos.slice(0, updateItemIndex),
          {
            ...todos[updateItemIndex],
            isDone: status,
          },
          ...todos.slice(updateItemIndex + 1),
        ];
        */

        // splice return deleted item
        todos.splice(updateItemIndex, 1, {
          ...todos[updateItemIndex],
          isDone: status,
        });

        return todos;
      });
    },
    [],
  );

  return <TodoList todos={todos} onChangeStatus={onChangeStatus} />;
};

export const Todo = () => {
  const { data, error, fetcher } = useGetDataAll();

  useEffect(() => {
    return fetcher(COLLECTION_TODOS);
  }, []);

  console.log(data, error);

  return (
    <>
      {error && <p>Error</p>}
      <div className="todo-container">
        {data ? <TodoContainer data={data} /> : <span>Loading...</span>}
      </div>
    </>
  );
};
