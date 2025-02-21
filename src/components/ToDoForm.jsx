import { useState } from "react";

const initialData = {
  id: null,
  task: "",
};
export default function ToDoForm({ createData }) {
  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.task) {
      alert("Datos incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="todo__form">
        <input
          onChange={handleChange}
          type="text"
          name="task"
          value={form.task}
          className="todo__input"
        />
        <input type="submit" value="agregar" className="todo__submit" />
      </form>
    </div>
  );
}
