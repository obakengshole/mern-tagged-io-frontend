import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { getMonitors, getTopics } from "../../services/api";
import { CardMedia } from "@mui/material";
import { InputBase, MenuItem, Toolbar } from "@mui/material";

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

const Home = () => {
  const topics = getTopics();
  const nav = useNavigate();

  const navigate = (path) => {
    console.log(path);
    nav(path);
  };

  return (
    <div>
      <p/>
      {/* <Button variant="contained" size="large" href="/topic/monitors">Laptops</Button> */}
      {/* <Button
        variant="contained"
        size="large"
        onClick={() => navigate(`/topic/monitors`)}
      >
        Laptops
      </Button>
      <Button variant="contained">Monitors</Button> */}

      {topics.map((topic) => {
        return (
          <div>
            <p />
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea
              onClick={() => navigate(`/topic/${topic.name}`)}
            >
              <CardMedia
                component="img"
                height="149"
                image={topic.image}
                alt="laptop"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {topic.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        )
      })}
    </div>
  );
};

export default Home;
