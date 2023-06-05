import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, Paper } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Popover from "@mui/material/Popover";
import { AddBtn } from "./CreatBtn";
import Box from "@mui/material/Box";
export default function Stages(props) {
  const createNewTask = (value) => {
    let newValue = {
      id:props.tasks.length+1,
      status: 0,
      story: value,
    };
    value.length > 0 && props.setTasks((old) => [...old, newValue]);
  };
  const updateTask = (taskId, nxt) => {
    const updatedTasks = props.tasks.map((obj) => {
      if (obj.id == taskId) {
        return { ...obj, status: nxt };
      }
      return obj;
    });
    props.setTasks(updatedTasks);
  };
  const stageCardSx = {
    display: "inline",
    position: "relative",
    flexDirection: "row",
    bgcolor: "#ffffff",
    minWidth: 200,
    border: 1,
    borderColor: "#f4f5f7",
    paddingLeft: 0,
    paddingRight: 0,
    padding: 1,
    borderRadius: 1,
  };
  const newStageStyle = {
    position: "absolute",
    width: 1,
    height: 25,
    color: "#1976d2",
    border: 0,
    borderTop: 1,
    borderColor: "#f4f5f7",
    bottom: 0,
    boxShadow: 0,
    right: 0,
    left: 0,
    borderRadius: 0,
  };
  const cardContStyle = {
    justifyContent: "center",
    paddingTop: 2,
    paddingBottom: 1,
  };
  const formStyle = {
    height: 100,
    margin: 0,
    fontSize: 14,
    boxShadow: 0,
    border: 0,
    borderTop: 1,
    borderColor: "#f4f5f7",
    borderRadius: 0,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
  };
  return (
    <Card sx={stageCardSx}>
      <Typography
        component="div"
        sx={{
          fontSize: 14,
          width: 1,
          textAlign: "center",
          borderBottom: 1,
          borderColor: "#f4f5f7",
        }}
        color="text.primary"
        gutterBottom
      >
        {props.stage}
      </Typography>
      <CardContent
      sx={{
        padding:0
      }}
      >
        {props.tasks.length > 0 &&
          props.tasks
            .filter((f) => f.status == props.index)
            .map((m, index) => (
              <StoryCard
                key={index}
                task={m}
                taskId={index}
                nxtStage={
                  props.stages.length > props.index + 1 &&
                  props.stages.at(props.index + 1)
                }
                updateTask={updateTask}
                nxtStageId={props.index + 1}
              />
            ))}
      </CardContent>
      {props.index == 0 &&
        AddBtn(
          createNewTask,
          "Add Task",
          newStageStyle,
          cardContStyle,
          formStyle
        )}
    </Card>
  );
}
function StoryCard({ task, nxtStage, taskId, updateTask, nxtStageId }) {
  return (
    <Paper
      elevation={3}
      color="text.primary"
      sx={{
        padding: 1,
        minWidth: "fit-content",
        m: 1,
      }}
    >
      <Typography
        sx={{
          width: 1,
          border: 0,
          textAlign: "center",
        }}
      >
        {task.story}
      </Typography>
      {nxtStage && (
        <Button
          component="button"
          color="primary"
          sx={{
            width: 1,
            boxShadow: 0,
            border: 0,
            "& > :not(style)": {
              border: 0,
            },
          }}
          onClick={() => updateTask(task.id, nxtStageId)}
        >
          move to {nxtStage}
        </Button>
      )}
    </Paper>
  );
}
