import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import ErrorPages from "./componets/ErrorPages.jsx";
import Pricing from "./Pages/Home/Pricing.jsx";
import Service from "./Pages/Home/Service.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import Login from "./componets/Login.jsx";
import Register from "./componets/Register.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import PriviteRoutes from "./routes/PriviteRoutes.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* error page */}
          <Route path="*" element={<ErrorPages />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* dashboard */}
        <Route
          path="/dashboard"
          element={
            <PriviteRoutes>
              <Dashboard />
            </PriviteRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
