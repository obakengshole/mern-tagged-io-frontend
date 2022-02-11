import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EChartsReactCore from "echarts-for-react"
import { populationDataFemale } from '../../DataFemale';
import { populationDataMale } from '../../DataMale';

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
export const GamePerformanceStats = () => {
    const getOption = () => {
       const option = {
            dataset: [
              {
                dimensions: ['score', 'amount', 'product'],
                source: [
                  [89.3, 58212, 'Matcha Latte'],
                  [57.1, 78254, 'Milk Tea'],
                  [74.4, 41032, 'Cheese Cocoa'],
                  [50.1, 12755, 'Cheese Brownie'],
                  [89.7, 20145, 'Matcha Cocoa'],
                  [68.1, 79146, 'Tea'],
                  [19.6, 91852, 'Orange Juice'],
                  [10.6, 101852, 'Lemon Juice'],
                  [32.7, 20112, 'Walnut Brownie']
                ]
              },
              {
                transform: {
                  type: 'sort',
                  config: { dimension: 'amount', order: 'asc'}
                }
              }
            ],
            grid: { containLabel: true },
            xAxis: { name: 'amount' },
            yAxis: { type: 'category' },
            visualMap: {
              orient: 'horizontal',
              left: 'center',
              min: 10,
              max: 100,
              text: ['High Score', 'Low Score'],
              // Map the score column to color
              dimension: 0,
              inRange: {
                color: ['#65B581', '#FFCE34', '#FD665F']
              }
            },
            series: [
              {
                type: 'bar',
                datasetIndex: 1,
                encode: {
                  // Map the "amount" column to X axis.
                  x: 'amount',
                  // Map the "product" column to Y axis
                  y: 'product'
                }
              }
            ]
          };
          
          return option
      };
      const sayHy = () => {
        console.log("say HI")
      }
  return (
    <EChartsReactCore
    option={getOption()}
        style={{ height: "80vh", left: 50, top: 50, width: "90vw" }}
        opts={{ renderer: "svg" }}
        onClick={sayHy}
    />
  )
};

export default GamePerformanceStats;
