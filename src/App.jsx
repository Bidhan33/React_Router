import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <nav>
        <h1>Welcome to react Router</h1>
        <Link to={"/"}>Home    </Link>
        <Link to={"/about"}>About    </Link>
        <Link to={"/contact"}>Contact    </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App