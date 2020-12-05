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
  onChangeStatus: (isDone: boolean) => void;
}
 */

export const TodoItem = ({
  id,
  title,
  contents,
  isDone,
  dueDate,
  onChangeStatus,
}) => {
  const label = isDone ? 'Not Yet' : 'Done';

  return (
    <div className="todo">
      <input type="hidden" value={id} />
      <div className="todo__body">
        <h2 className="todo__title">{title}</h2>
        <div className="todo__contents">{contents}</div>
        <time className="todo__due-date">{formatDate(dueDate.toDate())}</time>
      </div>
      <div className="todo__actions">
        <button
          className="button"
          type="button"
          onClick={() => onChangeStatus(!isDone)}
        >
          {label}
        </button>
      </div>
    </div>
  );
};
