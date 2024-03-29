import React from "react";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "40vw" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute reddirectTo="/login">
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <PrivateRoute reddirectTo="/" reverse={true}>
                    <Signup />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PrivateRoute reddirectTo="/" reverse={true}>
                    <Login />
                  </PrivateRoute>
                }
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
