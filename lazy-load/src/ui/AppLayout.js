import { Link, Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newsletters">Newsletters</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default AppLayout;
