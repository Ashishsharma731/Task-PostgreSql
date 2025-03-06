import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
