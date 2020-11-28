import { formatDate } from '../utilities';

/**
type TodoItemProps = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
  dueDate: timestamp (firebase object)
  created_at: timestamp (firebase object)
  updated_at: timestamp (firebase object)
}
 */

export const TodoItem = ({ id, title, contents, isDone, dueDate }) => {
  const label = isDone ? 'Not Yet' : 'Done';

  return (
    <div className="todo">
      <input type="hidden" value={id} />
      <div className="todo__body">
        <h2 className="todo__title">{title}</h2>
        <div className="todo__contents">{contents}</div>
        <time className="todo__due-date">{formatDate(dueDate.toDate())}</time>
      </div>
    </div>
  );
};
