import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to={
        isAuthenticated ? "/tasks" : "/"
      }>
        <h1 className="text-2xl font-bold">Tasks Manager</h1>
      </Link>
      {isAuthenticated ? (
        <>
          <ul className="flex gap-x-2 ">
            <li>
              <h1>Welcome, {user.username} ! </h1>
            </li>
            <li>
              <Link
                to="/add-task"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                {" "}
                Add a new task
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                {" "}
                Logout{" "}
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul className="flex gap-x-2 ">
            <li>
              <Link
                to="/login"
                className="bg-indigo-500     px-4 py-1 rounded-sm"
              >
                {" "}
                Login{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                {" "}
                Register{" "}
              </Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}

export default Navbar;
