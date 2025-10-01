import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/public-layout";
import HomePage from "@/routes/home";
import AuthLayout from "@/layouts/auth-layout";
import SignUpPage from "./routes/sign-up";
import SigninPage from "./routes/sign-in";
import ProtectedRoutes from "./layouts/protected-routes";
import MainLayout from "./layouts/main-layout";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes*/}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/*Authentication layout */}
        <Route element={<AuthLayout />}>
          <Route path="/signin/*" element={<SigninPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>
        {/*Protected route */}
        <Route
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
