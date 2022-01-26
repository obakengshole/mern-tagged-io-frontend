import React from 'react'
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardMedia } from "@mui/material";
import { getLaptops } from '../../services/api';

export const Laptops = () => {
  const laptops = getLaptops();
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={back}>
        Back{" "}
      </Button>
      <p />
      {laptops.map((laptop) => {
        return <p> <LaptopCard key={laptop.id} laptop={laptop} /> </p>
      })}
    </div>
  );
}

export const LaptopCard = (props) => {
    const { laptop } = props
    const { image, title } = laptop
    const shortDescription = laptop.text.substring(0, 121).concat("...")

    const navigate = useNavigate()

    return (
        <div>
          {/* <Container> */}
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea
              onClick={() => navigate(`/laptopdetails/${laptop.id}`)}
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
                  {shortDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* </Container> */}
        </div>
      );
}

export default Laptops
