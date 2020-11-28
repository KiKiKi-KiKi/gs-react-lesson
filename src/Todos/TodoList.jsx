import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onChangeStatus }) => {
  return (
    <ul className="todo">
      {todos.map(({ id, ...postData }) => (
        <li key={id} className="todo__item">
          <TodoItem id={id} {...postData} onChangeStatus={onChangeStatus(id)} />
        </li>
      ))}
    </ul>
  );
};
