import './App.css';
import TaskList from './components/TaskList';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <main>
          
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="about" element={<div>About</div>} />
          </Routes>
         
        </main>
      </div>
  );
}

export default App;
