import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Loading = lazy(() => import("./pages/Loading"));
const AppLayout = lazy(() => import("./ui/AppLayout"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="newsletters" element={<Newsletter />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
