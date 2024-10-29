import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationForm from "./pages/RegistrationForm";
import { ROUTER_PATHS } from "./util/constants";
import OrgDash from "./pages/OrgDash";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path={ROUTER_PATHS.MENTOR_FORM}
            element={<RegistrationForm isStudent={false} />}
          />
          <Route
            path={ROUTER_PATHS.STUDENT_FORM}
            element={<RegistrationForm isStudent={true} />}
          />
          <Route
            path="/org-dash"
            element={<OrgDash />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
