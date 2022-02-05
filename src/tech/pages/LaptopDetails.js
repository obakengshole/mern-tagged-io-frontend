import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { getLaptopDetailsById } from "../../services/api";
import ProductDescription from "./ProductDescription";

const LaptopDetails = () => {
  const { laptopId } = useParams()
  const laptopDetails = getLaptopDetailsById(laptopId);
  
  const [showProductDescription, setProductDescription] = useState(false)
  const [showSpecs, setShowSpecs] = useState(false)
  const [showSpecs2, setShowSpecs2] = useState(false)
  const [showGamePerformanceStats, setShowGamePerformanceStats] = useState(false)

  const [buttonActive, setButtonActive] = useState(false)

  const handleShowSpecs = () => {
    setShowSpecs(!showSpecs)
    // setVariant(!variant)
    setButtonActive(!buttonActive)
    setProductDescription(false)
    setShowGamePerformanceStats(false)
  }
  
  const handleGamePerformance = () => {
    setShowGamePerformanceStats(!showGamePerformanceStats)
    // setVariant(!variant)
    setButtonActive(!buttonActive)
    setProductDescription(false)
    setShowSpecs(false)
  }
  
  const handleProductDescription = () => {
    setProductDescription(!showProductDescription)
    setButtonActive(!buttonActive)
    // setVariant(!variant)
    setShowSpecs(false)
    setShowGamePerformanceStats(false)
  }
  
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
      <Stack spacing={5} direction="row">
        <MyButton variant={buttonActive} action={handleProductDescription} text="Description"></MyButton>
        <MyButton variant={buttonActive} action={handleShowSpecs} text="Specs">Specs</MyButton>
        <MyButton variant={buttonActive} action={handleGamePerformance} text="Game Performance Stats"></MyButton>
      </Stack>

      <p />
      { showProductDescription && <ProductDescription /> }
      { showSpecs && <Specs2 laptopDetails={laptopDetails} /> }
      { showGamePerformanceStats && <GamePerformance /> }

      {/* <Specs2 laptopDetails={laptopDetails} /> */}
    </div>
  );
};

const MyButton = (props) => {
  const { active, action, text } = props
  return (
    <Button variant={ active ? "contained" : "outlined"} onClick={action}> {text} </Button>
  )
}

const styleLabel = {
  width: "100%",
  size: 10,
};

const Specs2 = (laptopDetails) => {
  console.log('laptopDetails', laptopDetails);
  const laptopDetailsObj = laptopDetails.laptopDetails.specs
  const keys = Object.keys(laptopDetailsObj)
  const values = Object.values(laptopDetailsObj)
  console.log('keys', keys);
  console.log('laptopDetailsObj', laptopDetailsObj);

  return (

    <Box sx={{ width: '100%', height: '100%', maxWidth: 500 }}>
        <List sx={styleLabel} component="nav" aria-label="mailbox folders">
                <Grid container columns={{ xs: 2, sm: 2, md: 2 }}>

          {
            keys.map((key, i) => {
              return (
                <>
                <Grid item xs={1} sm={1} md={1}>
                  <ListItem sx={{ bgcolor:"#9fd3c7", height: '100%' }}>
                    <ListItemText primary={key} />
                  </ListItem>
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                  <ListItem sx={{ bgcolor: "#ececec", height: '100%' }}>
                    <ListItemText primary={values[i]} />
                  </ListItem>
                </Grid>
                  <Divider />
                </>
              )
            })
          }

            </Grid>
        </List>
      </Box>
  );
};

const GamePerformance = () => {
  const [showSpecs, setShowSpecs] = useState(false)

  const handleShowSpecs = () => {
    setShowSpecs(!showSpecs)
  }

  return (
    <>
    <div>
        Game Performance
    </div>

      
    </>
  )
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
            <p/>
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
                  <ListItem>
                    <ListItemText primary={value} />
                    <ListItemText sx={{bgcolor:"#9fd3c7"}} primary={value} />
                  </ListItem>
                  <Divider />
                  <p/>
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
