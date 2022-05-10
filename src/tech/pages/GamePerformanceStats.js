import React, { useEffect, useState } from "react";
import { getGamePerformanceStats } from "../../services/api";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Label,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useNavigate } from "react-router";
import MySwiper from "../components/MySwiper";

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

  return (
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
    <div>
      <ResponsiveContainer aspect={1}  height="100%" width="100%">
        <BarChart layout="vertical" width={930} height={650} data={laptops}>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis
            type="category"
            // width={500}
            height={100}
            interval={0}
          >
          </YAxis>
          <XAxis type="number" />
          <Tooltip />
          <Legend />
          <Bar
            background
            dataKey="framerate.average"
            fill="#8884d8"
            // maxBarSize={20}
            onClick={test.bind(this)}
          >
          <LabelList dataKey="title" position="inside" />
          
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
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
    <Paper elevation={3} sx={{ height: 500  }}width="100%">
      <MySwiper selectedSlide={setSelectedTitle} slideTopics={slideTopics} />
      {/* <MySwiper /> */}
      {/* <Grid container columns={{ xs: 2, sm: 2, md: 4 }}> */}
        {/* <Grid item xs={1} sm={1} md={1}> */}
          <GameChart data={data}/>
        {/* </Grid> */}
      {/* </Grid> */}
      </Paper>
  );
};

export default GamePerformanceStats;
