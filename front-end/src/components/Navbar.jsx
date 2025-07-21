import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const Navbar = () => {
  const isAdmin = true; // Set to false to simulate a normal user

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "New Arrivals", path: "/NewArrivals" },
    { label: "All", path: "/All" },
    { label: "Men", path: "/Men" },
    { label: "Women", path: "/Women" },
    { label: "T-Shirts", path: "/TShirts" },
    { label: "Shirts", path: "/Shirts" },
    { label: "Cart", path: "/Cart" },
  ];

  if (isAdmin) {
    navLinks.push({ label: "Admin Panel", path: "/admin" });
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#ff4081",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 10,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
          POINT BREAK
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          {navLinks.map((nav, index) => (
            <MotionButton
              key={index}
              component={Link}
              to={nav.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                color: "#000",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              {nav.label}
            </MotionButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
