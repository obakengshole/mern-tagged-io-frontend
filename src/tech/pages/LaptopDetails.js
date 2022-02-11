import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { Tab, Tabs, TabContainer, TabContent, TabPane, Row, Col, Nav } from 'react-bootstrap'

import { getLaptopDetailsById } from "../../services/api";
import ProductDescription from "./ProductDescription";

const LaptopDetails = () => {
  const { laptopId } = useParams()
  const laptopDetails = getLaptopDetailsById(laptopId);
  
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
      <MyTabs
        productDescription={<ProductDescription />}
        techDetails={<Specs2 laptopDetails={laptopDetails} />}
        gamePerformanceStats={<GamePerformance />}
      />

    </div>
  );
};

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
                  <ListItem sx={{ bgcolor:"#ececec", height: '100%' }}>
                    <ListItemText primary={key} />
                  </ListItem>
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                  <ListItem sx={{ bgcolor: "#fafafa", height: '100%' }}>
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

const MyTabs = (props) => {
  return (
    <>
    <Tabs
  defaultActiveKey="prodDescription"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
  variant="pills"
>
  <Tab eventKey="prodDescription" title="Product Description">
    { props.productDescription }
  </Tab>
  <Tab eventKey="techDetails" title="Technical Details">
    { props.techDetails }
  </Tab>
  <Tab eventKey="gameStats" title="Game Performance Stats">
    { props.gamePerformanceStats }
  </Tab>
</Tabs>
</>
  )
}

export default LaptopDetails;
