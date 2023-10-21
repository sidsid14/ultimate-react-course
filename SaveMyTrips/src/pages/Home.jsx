import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Home() {
  return (
    <div>
      <PageNav />
      <h1>SaveMyTrips</h1>
      <Link to="/app">Go to App</Link>
    </div>
  );
}

export default Home;
