import React, { useRef, Component } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { height, maxWidth } from "@mui/system";
import Stack from "@mui/material/Stack";
import CreateBtn from "./CreatBtn";
import Stages from "./Stages";
export default function Board() {
  const [stages, setStages] = useState(["TO-DO"]);
  const [tasks, setTasks] = useState([]);
  const stagesBoxStyle = {
    justifyContent: "flex-start",
    overflowX: "scroll",
    alignItems:'center',
    display: "flex",
    minWidth:250,
    "& > :not(style)": {
      m: 1,
      minHeight: 300,
      width:1
    },
  };
  const stackStyle = {
    justifyContent: "center",
    display: "flex",
    maxWidth: "99%",
    margin:2
  };
  return (
    
    <Stack direction="row" spacing={2} component="div" sx={stackStyle}>
      <Box component="div" sx={stagesBoxStyle}>
        {stages.map((s, index) => (
          <Stages key={index} index={index} tasks={tasks} setTasks={setTasks} stage={s} stages={stages}/>
        ))}
      </Box>
      <Box component="div"
        sx={{
          width: "15%",
          marginleft:0,
          "& > :not(style)": {
            marginLeft: 0,
            marginRight:0,
            width: 1,
          },
        }}
      >
        <CreateBtn setStages={setStages} />
      </Box>
    </Stack>
  );
}

