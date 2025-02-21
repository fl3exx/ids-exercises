import TodoItem from "./TodoItem.jsx";

export default function TodoList({ data, deleteData }) {
  return (
    <div className="todo__list">
      {data.map((el) => (
        <TodoItem el={el} key={el.id} deleteData={deleteData} />
      ))}
    </div>
  );
}
