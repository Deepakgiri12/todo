import { useEffect, useState , useCallback } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API = process.env.REACT_APP_API_URL;

  // Fetch all tasks
  const getTasks = useCallback( async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${API}/tasks`);
      setTasks(res.data);
    } catch (err) {
  console.log(err.message);
  setError("Failed to fetch tasks");
}
     finally {
      setLoading(false);
    }
  }, [API]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  // Add task
  const addTask = async () => {
    if (!title) return setError("Title cannot be empty");
    setLoading(true);
    setError("");
    try {
      await axios.post(`${API}/tasks`, { title, completed: false });
      setTitle("");
      getTasks();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    setLoading(true);
    setError("");
    try {
      await axios.delete(`${API}/tasks/${id}`);
      getTasks();
    } catch (err) {
      setError("Failed to delete task");
    } finally {
      setLoading(false);
    }
  };

  // Toggle task status
  const toggleTask = async (task) => {
    setLoading(true);
    setError("");
    try {
      await axios.patch(`${API}/tasks/${task._id}/status`, {
        completed: !task.completed,
      });
      getTasks();
    } catch (err) {
      setError("Failed to update task status");
    } finally {
      setLoading(false);
    }
  };

  // Backend search
  const searchTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${API}/tasks/search?q=${search}`);
      setTasks(res.data);
    } catch (err) {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  // Frontend filtering fallback
  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Todo App</h2>

      {/* Search */}
      <input
        placeholder="Search task"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchTasks}>Search</button>

      <br />
      <br />

      {/* Add Task */}
      <input
        placeholder="Add task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      {/* Loading/Error below Add Task */}
      <div className="status">
          {loading && <p className="loading">Loading...</p>}
          {error && <p className="error">{error}</p>}
      </div>

      <br />

      {/* Task List */}
      {filteredTasks.map((t) => (
  <div className="task" key={t._id}>
    <input
      type="checkbox"
      checked={t.completed}
      onChange={() => toggleTask(t)}
    />

    <div className="task-text">
      <span
        style={{
          textDecoration: t.completed ? "line-through" : "none",
        }}
      >
        {t.title}
      </span>
    </div>

    <button onClick={() => deleteTask(t._id)}>Delete</button>
  </div>
))}
    </div>
  );
}

export default App;