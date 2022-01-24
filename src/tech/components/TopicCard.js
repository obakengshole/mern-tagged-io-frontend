import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { getMonitors } from "../../services/api";
import { CardMedia } from "@mui/material";
import Container from "@mui/material/Container";

const TopicCard = (props) => {
  const { monitor } = props;
  const { title, image } = props;
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
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => navigate(`/monitordetails/${monitor.id}`)}>
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

export default TopicCard;
