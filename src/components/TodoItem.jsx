export default function TodoItem({ el, deleteData }) {
  const handleClick = () => {
    deleteData(el.id);
  };
  return (
    <div className="todo__item">
      <div className="todo__item--task">{el.task}</div>
      <button className="todo__item--delete-btn" onClick={handleClick}>
        eliminar
      </button>
    </div>
  );
}
