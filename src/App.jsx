import "./App.css";
import { Router, ReactLocation, Outlet } from "react-location";
import routes from "./pages/router";
import Navbar from "./pages/navbar";
import RiseSet from "./components/riseset";
function App() {
  const location = new ReactLocation();
  return (
    <div className="whole-body">
      <Router location={location} routes={routes}>
        <Navbar />
        <RiseSet />
        <div className="bgchange">
          <Outlet />
        </div>
      </Router>
    </div>
  );
}

export default App;
