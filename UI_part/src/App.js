import * as React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";
import {
  AddProduct,
  Customers,
  Inbox,
  Orders,
  Products,
  Settings,
  SingleCustomer,
  SingleOrder,
  SingleProduct,
} from "./pages";
import SignInSide from "./pages/SignIn";
import UserProfilePage from "./pages/User_Page";
import ProjectForm from "./pages/Customers";
const sideBarWidth = 250;  // 250 ( make it dynamic from 0 to 250 )

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const hideNavAndSidebar = location.pathname === "/sign" || location.pathname === "/user_view";

  return (
    <Box sx={{ display: "flex" }}>
      {!hideNavAndSidebar && (
        <>
          <Navbar
            sideBarWidth={sideBarWidth}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Sidebar
            sideBarWidth={sideBarWidth}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 1, md: 2 },
          width: { xs: "100%", md: hideNavAndSidebar ? "100%" : `calc(100% - ${sideBarWidth}px)` },
        }}
      >
        <Routes>
          {/* Redirect "/" to "/sign" */}
          <Route path="/" element={<Navigate to="/sign" />} />
          <Route path="/sign" element={<SignInSide />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/customers" element={<ProjectForm />} />
          <Route path="/customers/:id" element={<SingleCustomer />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<SingleOrder />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/user_view" element={<UserProfilePage />} />

          
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
