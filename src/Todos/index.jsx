import { useEffect } from 'react';
import { TodoList } from './TodoList';
import { COLLECTION_TODOS } from '../config';
import { useGetDataAll } from '../hooks/useFirebase';

const TodoContainer = ({ data }) => {
  return (
    <div className="todo-container">{data && <TodoList todos={data} />}</div>
  );
};

export const Todo = () => {
  const { data, error, fetcher } = useGetDataAll();

  useEffect(() => {
    return fetcher(COLLECTION_TODOS);
  }, []);

  console.log(data, error);

  return error ? <p>Error</p> : <TodoContainer data={data} />;
};
