import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import "./index.css";
import Dashboard from "./components/hr/dashboard";
import UserDashboard from "./components/users/userDashborad";
import Login from "./components/account/userLogin";
import Layout from "./layout";

function App() {
  const LoginRoute = () => {
    return (
      <div className="App">
        <div className="login-background">
          <Login />
        </div>
      </div>
    );
  };
  const HrDashboard = () => {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  };
  const CandidateDashboard = () => {
    return (
      <div className="App">
        <UserDashboard />
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginRoute />} />
          <Route
            path="hr"
            element={
              <div className="App">
                <HrDashboard />
              </div>
            }
          />
          <Route path="candidate" element={<CandidateDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
