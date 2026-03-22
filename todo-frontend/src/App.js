import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const API = "https://todo-n2nq.onrender.com/tasks";

  const getTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;

    await axios.post(API, {
      title,
      completed: false,
    });

    setTitle("");
    getTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(API + "/" + id);
    getTasks();
  };

  const toggleTask = async (task) => {
    await axios.put(API + "/" + task._id, {
      title: task.title,
      completed: !task.completed,
    });

    getTasks();
  };

  // search filter (frontend search)
  const filteredTasks = tasks.filter((t) =>
    t.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Todo App</h2>

      {/* search */}
      <input
        placeholder="Search task"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <br />

      {/* add */}
      <input
        placeholder="Add task"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <button onClick={addTask}>
        Add
      </button>

      {/* list */}
      {filteredTasks.map((t) => (
        <div className="task" key={t._id}>
          <div>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(t)}
            />

            {t.title}
          </div>

          <button
            onClick={() =>
              deleteTask(t._id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;