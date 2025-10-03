import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/public-layout";
import HomePage from "@/routes/home";
import AuthLayout from "@/layouts/auth-layout";
import SignUpPage from "./routes/sign-up";
import SigninPage from "./routes/sign-in";
import ProtectedRoutes from "./layouts/protected-routes";
import MainLayout from "./layouts/main-layout";
import Generate from "./components/generate";
import Dashboard from "./routes/dashboard";
import CreateEditPage from "./components/create-edit-page";
import MockLoadPage from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { Feedback } from "./routes/feedback";
import Page from "./routes/contact-page";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes*/}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Page />} />
          <Route path="/about" element={<Page />} />
          <Route path="/services" element={<Page />} />
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
        >
          {/* Add all protected routes */}
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
