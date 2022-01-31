import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { getLaptopDetailsById } from "../../services/api";

const LaptopDetails = () => {
  const { laptopId } = useParams()
  const laptopDetails = getLaptopDetailsById(laptopId);
  
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={back}>
        {" "}
        Back{" "}
      </Button>
      <p />
      <Stack spacing={10} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <p />
      <Specs laptopDetails={laptopDetails} />
    </div>
  );
};

const styleLabel = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "#ececec",
  size: 10,
};

const Specs = (laptopDetails) => {
  console.log('laptopDetails', laptopDetails);
  const laptopDetailsObj = laptopDetails.laptopDetails
  const keys = Object.keys(laptopDetailsObj)
  const values = Object.values(laptopDetailsObj)
  console.log('keys', keys);
  console.log('laptopDetailsObj', laptopDetailsObj);

  return (
    <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
      <Grid item xs={1} sm={4} md={4}>
        <List sx={style} component="nav" aria-label="mailbox folders">

        {
          keys.map((key) => {
            return (

              <>
            <ListItem button>
            <ListItemText primary={key} />
          </ListItem>
            <Divider />
            </>
              )
          })
        }

        </List>
      </Grid>

      <Grid item xs={1} sm={4} md={4}>
        <List sx={styleLabel} component="nav" aria-label="mailbox folders">

          {
            values.map((value) => {
              return (
                <>
                  <ListItem button>
                    <ListItemText primary={value} />
                  </ListItem>
                  <Divider />
                </>
              )
            })
          }

        </List>
      </Grid>
    </Grid>
  );
};

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "#9fd3c7",
  size: 10,
};

export default LaptopDetails;
