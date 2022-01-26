import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CardActionArea } from "@mui/material";
import { CardMedia } from "@mui/material";
import { getMonitors } from "../../services/api";

// https://s.neofiliac.com/P/69/19/1610570242_t.jpg

export const Monitors = () => {
  const monitors = getMonitors();
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <div>
      <Box sx={{
        width: 300,
        height: 60
      }}>
      <Button variant="contained" color="secondary" onClick={back}>
        Back{" "}
      </Button>

        
      </Box>
      {/* <ResponsiveGrid /> */}
      
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
      {monitors.map((monitor) => {
        {/* <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
        return (
          <Grid item xs={2} sm={4} md={4}>
            <MonitorCard key={monitor.id} monitor={monitor} />
          </Grid>
        )
      })}
      </Grid>
      </Box>
      </div>

);
};
{/* <Container>
<Grid item container direction="column" columnSpacing={{ xs: 2, sm: 2, md: 3 }} sx={{ width: '100%'}}>
{monitors.map((monitor) => {
return (
  <p>
    <Grid item xs>
    <MonitorCard key={monitor.id} monitor={monitor} />
    </Grid>
    </p>
)
})}
</Grid>

</Container> */}

export const MonitorCard = (props) => {
  const { monitor } = props;
  const { title, image } = monitor;
  const indexOfFirstPeriod = monitor.text.indexOf(".", 0);
  const abridgedText = monitor.text.substring(0, indexOfFirstPeriod);

  const navigate = useNavigate();

  const sayHi = (path) => {
    console.log("helllooo?", path);
    navigate(path);
  };

  return (
    <div>
      {/* <Container> */}
      <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardActionArea
          onClick={() => navigate(`/monitordetails/${monitor.id}`)}
        >
          <CardMedia
            component="img"
            height="149"
            image={image}
            // alt="laptop"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {abridgedText}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* </Container> */}
    </div>
  );
};


export default Monitors;
