import React from "react";
import {
  useNavigate
} from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "reactstrap";
import Container from '@mui/material/Container'

const MonitorCard = (props) => {
  const { monitor } = props;
  const indexOfFirstPeriod = monitor.text.indexOf(".", 0);
  const abridgedText = monitor.text.substring(0, indexOfFirstPeriod);

  const navigate = useNavigate()

  const sayHi = (path) => {
    console.log('helllooo?', path);
    navigate(path)
  }

  return (
    <div>
      <Container>
        {/* <Row> */}
        {/* <Col> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={monitor.img} />
          <Card.Body>
            <Card.Title>{monitor.title}</Card.Title>
            <Card.Text>{abridgedText}</Card.Text>
            <Button 
              variant="primary"
              onClick={() => sayHi(`/monitordetails/${monitor.id}`)}
            >See More</Button>
          </Card.Body>
        </Card>
        {/* </Col> */}
        {/* </Row> */}
      </Container>
  
    </div>
  );
};

export default MonitorCard;
