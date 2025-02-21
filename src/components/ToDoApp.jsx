import { useEffect } from 'react';
import ToDoForm from './ToDoForm.jsx';
import TodoList from './TodoList.jsx';
import axios from 'axios';
import { useState } from 'react';
import Message from './Message.jsx';

export default function ToDoApp() {
  const url = 'http://localhost:5000/todoList';
  const [taskList, setTaskList] = useState([]);
  const [isDb, setIsDb] = useState(false);
  useEffect(() => {
    const requestFuct = async () => {
      try {
        const res = await axios.get(url);
        const data = await res.data;
        setTaskList(data);
        setIsDb(true);
      } catch (error) {
        console.log(error);
      }
    };

    requestFuct();
  }, []);

  const createData = async (data) => {
    data.id = Date.now().toString();

    try {
      const res = await axios.post(url, data);
      setTaskList([...taskList, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    let isDelete = confirm(`desea eliminar la tarea con el id ${id}`);

    if (isDelete) {
      try {
        const dataToDelete = await axios.delete(`${url}/${id}`);
        const newData = taskList.filter((item) => item.id !== id);
        setTaskList(newData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="todo__container">
      <h1 className="todo__title">app to do list</h1>
      <ToDoForm createData={createData} />
      {isDb ? (
        <TodoList data={taskList} deleteData={deleteData} />
      ) : (
        <Message />
      )}
    </div>
  );
}
