import logo from "./logo.svg";
import "./App.css";
import Tasks from "./Components/tasks";

function App() {
  return (
    <div className="container my-3">
      <form>
        <div className="mb-3 ">
          <label htmlFor="adding task" className="form-label">
            Add Task
          </label>
          <input
            type="text"
            className="form-control"
            id="adding task"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <Tasks/>
    </div>
  );
}

export default App;
