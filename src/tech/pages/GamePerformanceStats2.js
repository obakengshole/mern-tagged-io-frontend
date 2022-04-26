import React, { Component, useEffect, useState } from "react";
import { getGamePerformanceStats } from "../../services/api";
import { styled } from "@mui/material/styles";

import { Grid, Paper, Container } from "@mui/material";
import { Box } from "@mui/system";
import Chart from 'react-apexcharts'
import { useNavigate } from "react-router";
import MySwiper from "../components/MySwiper";
import  {ScrollMenu} from "react-horizontal-scrolling-menu";
import '../components/myswiper.css'
import HorizontalScroll2 from '../components/horizontal-scroll/HorizontalScroll2'
import { TagInput } from "../components/tag-input/TagInput";

export const GameChart = (props) => {
  let { data } = props
  const title = data.title
  const laptops = data.laptops
  console.log("data.length: ", laptops.length);
  const navigate = useNavigate();

  const test = (bar) => {
    console.log("tesssssst bar: ", bar.laptopId);
    navigate(`/laptopdetails/${bar.laptopId}`);
  };

  // const options = {
  //   chart: {
  //     id: 'apexchart-example'
  //   },
  //   xaxis: {
  //     categories: laptops.map(laptop => { return laptop.title })
  //   }
  // };
  // const series = [{
  //   name: 'series-1',
  //   data: laptops.map(laptop => { return laptop.framerate.average })
  // }]

  const series = [{
    name: 'Average framerate in FPS',
    data: laptops.map(laptop => { return laptop.framerate.average })
  }]

  const options = {
    chart: {
      type: 'bar',
      height: '100%',
      width: 300,
      events: {
        dataPointSelection: function(event, chartContext, config) {
          console.log(chartContext, config);
        }
      }
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        horizontal: true,
        dataLabels: {
          position: 'bottom',
        },
      }
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      offsetX: 0,
      style: {
        fontSize: '12px',
        colors: ['#000']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
      }
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: laptops.map(laptop => { return laptop.title })
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  }



  return (

      <Chart options={options} series={series} type="bar" width={400} height={850} />

    // <>
    // <ResponsiveContainer >
    //   <BarChart width={100} data={laptops} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <XAxis dataKey="title" angle={45} interval={0} tickSize={20} height={80} offset={15} />
    //     {/* <XAxis height={50}/> */}
    //     <YAxis height={50}/>
    //     <Tooltip />
    //     <Legend />
    //     <Bar label={title} dataKey="framerate.average" fill="#8884d8" />
    //   </BarChart>
    //  </ResponsiveContainer>
    //  </>
    // <div>
    //   <ResponsiveContainer aspect={1}  height="100%" width="100%">
    //     <BarChart layout="vertical" width={930} height={650} data={laptops}>
    //       <CartesianGrid strokeDasharray="3 3" />
    //       <YAxis
    //         dataKey="title"
    //         type="category"
    //         width={500}
    //         height={100}
    //         interval={0}
    //       >
    //         <Label value={title} offset={0} position="insideTop" />
    //       </YAxis>
    //       <XAxis type="number" />
    //       <Tooltip />
    //       <Legend />
    //       <Bar
    //         background
    //         label
    //         dataKey="framerate.average"
    //         fill="#8884d8"
    //         onClick={test.bind(this)}
    //       />
    //     </BarChart>
    //   </ResponsiveContainer>
    // </div>
  )
}

const MenuItem = ({ text, selected }) => styled("div")(({ theme }) => ({
  padding: "0 40px",
  margin: "5px 10px",
  userselect: "none",
  cursor: "pointer",
  border: "none"
}));

const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];

// One item component
// selected prop will be passed
const MenuItem1 = ({ text, selected }) => {
  return (
    <div
      className="menu-item"
    >
      {text}
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name } = el;

  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export const ReactHorizontalScroll = () => {
  const [selected, setSelected] = useState(0)

  const onSelect = key => {
    setSelected({ selected: key })
  }

  const menu = Menu(list, selected);

    return (
      <div className="myswiper">

        <ScrollMenu
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={onSelect}
          >
            {
        list.map((item) => {
          return (
            <MenuItem text={item.name} />
          )
        })
      }
          </ScrollMenu>
      </div>
    );
}

export const GamePerformanceStats = () => {
  const stats = getGamePerformanceStats();
  const title = stats[0].title;
  console.log("stats", stats);
  const keys = Object.keys(stats);
  const values = Object.values(stats);
  console.log("values", values[0].DLSS);

  const [selectedTitle, setSelectedTitle] = useState(0)
  const [data, setData] = useState(stats[0])

  useEffect(() => {
    console.log('useEffect', selectedTitle);
    setData( findDataById(selectedTitle) )
    console.log('findDataById', data);
  }, [selectedTitle])

  const slideTopics = stats.map(stat => {
    return { id: stat.id, topic: stat.title }
  })

  const findDataById = (id) => {
    return stats[id]
  }

  return (
    <>
    <Paper elevation={3} sx={{ height: '100%' }}width="100%">
    <HorizontalScroll2 slideTopics={slideTopics} selectedSlide={setSelectedTitle}/>
    <TagInput />
      <Grid container spacing={2}>
        <Grid item xs={1} sm={1} md={4}>
          <GameChart data={data}/>
      </Grid>
        </Grid>
      </Paper>
    {/* <Paper elevation={3} sx={{ height: '100%' }}width="100%">
      <MySwiper selectedSlide={setSelectedTitle} slideTopics={slideTopics} />
    </Paper>
    <div class={{padding: 60}}>
    <Paper elevation={3} sx={{ height: '100%' }}width="100%">
      <Grid container spacing={2}>
        <Grid item xs={1} sm={1} md={4}>
          <GameChart data={data}/>
      </Grid>
        </Grid>
      </Paper>

    </div> */}
      </>
  );
};

export default GamePerformanceStats;