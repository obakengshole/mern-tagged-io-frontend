import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EChartsReactCore from "echarts-for-react"
import { populationDataFemale } from '../../DataFemale';
import { populationDataMale } from '../../DataMale';
import { useRef } from 'react';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Title, Tooltip, Legend } from 'chart.js';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

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

  let labels = []
  let dset = []
  stats.map(key => {
    key.laptops.map(laptop => {
      labels.push(laptop.title)
      dset.push({ title: laptop.title, framerate: laptop.framerate.average })
    })
  })

  console.log("labels", labels);
  // const labels = []
  const datasets = [
    {
      label: "(FPS) Frames Per Second",
      data: labels.map((label, i) => {
        console.log("label.framerate", dset[i].framerate)
        return dset[i].title === label ? dset[i].framerate : ''
      }),

        // stats.map(key => {
        //   key.laptops.map(laptop => {
        //     return laptop.framerate.average
        //   })
        // })
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
  
  let data = {
    labels: labels,
    datasets: datasets
  }
  console.log("data", data);
  const chartRef = useRef();
  const onClick = (event) => {
    console.log(getElementAtEvent(chartRef.current, event));
    console.log('clicked');
  }

  const options = {
    indexAxis: 'y',
    plugins: {
      legend: {
        position: 'right'
      },
      title: {
        display: true,
        text: title
      }
    }
  }

  return (
    <Bar
      ref={chartRef}
      data={data}
      options={options}
      onClick={onClick}
    />
  )
}

export default GamePerformanceStats;
