import { Fragment } from "react";
import Login from "./Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <Fragment>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/admin-panel" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
