import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./util/auth";
import { ROUTER_PATHS } from "./util/constants";
import ScrollToTop from "./util/scrollToTop";
import PastProgramsPage from "./pages/PastProgramsPage";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path={ROUTER_PATHS.PROJECTS_LIST} element={<Projects />} />
              <Route path={ROUTER_PATHS.FAQ} element={<FAQ />} />
              <Route
                path={ROUTER_PATHS.PASTPROGRAMS}
                element={<PastProgramsPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AuthProvider>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
