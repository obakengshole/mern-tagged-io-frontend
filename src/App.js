import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Redirect,
  Link,
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Monitors, MonitorCard } from "./tech/pages/Monitors";
import { Container } from "reactstrap";
import MonitorDetails from "./tech/pages/MonitorDetails";
import Home from "./tech/pages/Home";
import { styled, alpha } from "@mui/material/styles";

import Button from "@mui/material/Button";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { InputBase, MenuItem, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Topics from "./tech/pages/Topics";
import LaptopDetails from "./tech/pages/LaptopDetails";
import Laptops from "./tech/pages/Laptops";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const App = () => {
  return (
    <div className="App">
      {/* <Navbar expand="lg" variant="light" bg="info">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar> */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              {/* Home */}
              <Button variant="inherit" href="/">
                Home
              </Button>
            </Typography>
            <Menu
              open={false}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem></MenuItem>
            </Menu>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase></StyledInputBase>
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      <p />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/laptops" element={<Laptops />}/>
            <Route path="/laptopdetails">
              <Route path=":laptopId" element={<LaptopDetails />} />
            </Route>
          {/* </Route> */}
          <Route path="/topic/monitors" element={<Monitors />}/>
            <Route path="/monitordetails">
              <Route path=":monitorId" element={<MonitorDetails />} />
            </Route>
          {/* </Route> */}
          {/* <Route component={Error} /> */}
        </Routes>
      </Container>
    </div>
  );
};

export default App;
