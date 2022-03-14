import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EChartsReactCore from "echarts-for-react"
import { populationDataFemale } from '../../DataFemale';
import { populationDataMale } from '../../DataMale';
import { Box } from '@mui/material'
import Paper from "@mui/material/Paper";
import { useRef } from 'react';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { getGamePerformanceStats } from '../../services/api';

//     <Row xs={1} md={2} lg={4} className="g-4">
//     {Array.from({ length: 4 }).map((_, idx) => (
//       <Col>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a longer card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit longer.
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//     ))}
//   </Row>


const labels = ['Lenovo Legion 5', 'Acer Nitro 5']
const data2 = {
  labels,
  datasets: [
    {
      data: labels.map(() => 1) 
    }
  ]  
};

const data1 = {
  labels,
  datasets: [
    {
      data: labels.map(() => 1) 
    }
  ]  
};

export const GamePerformanceStats = () => {
  const stats = getGamePerformanceStats()
  const title = stats[0].title
  console.log("stats", stats);
  const keys = Object.keys(stats)
  const values = Object.values(stats)
  console.log("values", values[0].DLSS);
  const fr = [1, 200]

  const data = [
    { argument: 'Monday', value: 30 },
    { argument: 'Tuesday', value: 20 },
    { argument: 'Wednesday', value: 10 },
    { argument: 'Thursday', value: 50 },
    { argument: 'Friday', value: 60 },
  ];

  const data1 = []
  stats[0].laptops.map(laptop => {
    data1.push({ title: laptop.title, framerate: laptop.framerate.average })
  })

  const labelStyle = { fill: '#BBDEFB' };


  const BarWithLabel = ({
    arg, barWidth, maxBarWidth, val, startVal, color, value, style,
  }) => {
    const width = maxBarWidth * barWidth;
    return (
      <React.Fragment>
        {/* <path d={getPath(arg - width / 2, width, val, startVal)} fill={color} style={style} /> */}
        <Chart.Label
          x={arg}
          // y={(val + startVal) / 2}
          y={value}
          dominantBaseline="middle"
          textAnchor="middle"
          style={labelStyle}
        >
          {value}
        </Chart.Label>
      </React.Fragment>
    );
  };

  return (
      <Paper>
      <Chart
        data={data1}
        rotated="true"
      >
        <ArgumentAxis />
        <ValueAxis />
    
        {/* <BarSeries valueField="value" argumentField="argument" rotated="true"/> */}
        <BarSeries 
          valueField="framerate" argumentField="title" rotated="true"
          />
      </Chart>
    </Paper>
  );
}

export default GamePerformanceStats;
