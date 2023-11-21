import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Loading = lazy(() => import("./pages/Loading"));

function App() {
  return (
    <BrowserRouter>
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

      <hr />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="newsletters" element={<Newsletter />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
