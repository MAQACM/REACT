import React, { useRef, Component } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Stages from "./Stages";
import Button from "@mui/material/Button";
import { height, maxWidth } from "@mui/system";
export default function AddButton({ setStages}) {
  const createNewStage = (value) => {
    value.length>0&&setStages((old) => [...old, value]);
  };
    const newStageStyle = {
    minWidth:1,
    height: 25,
    margin: 1,
    color: "#1976d2",
    border: 0,
  };
  const cardContStyle = {
    justifyContent: "center",
    paddingTop: 2,
    paddingBottom: 1,
  };
  const formStyle = {
    width: 1,
    height: 100,
    margin: 0,
  };
  return AddBtn(createNewStage,"Add Column",newStageStyle,cardContStyle,formStyle);
}

export function AddBtn(createNewCard,btnText,newStageStyle,cardContStyle,formStyle) {
    const [isCreate, setIsCreate] = useState(false);
    const newStatusStage = useRef("");
    return isCreate ? (
        <Card component="form" sx={formStyle}>
            <CardContent component="div" sx={cardContStyle}>
                <TextField
                    sx={{ width: 1 }}
                    label="Add New Stage"
                    placeholder="Add stage here"
                    color="primary"
                    focused
                    inputRef={newStatusStage}
                    size="small" />
                <Box
                    sx={{ marginTop: 0.2 }}
                    component="span"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Link
                        underline="none"
                        component="button"
                        variant="body2"
                        onClick={() => setIsCreate(false)}
                    >
                        Cancel
                    </Link>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => {createNewCard(newStatusStage.current.value);setIsCreate(false);}}
                    >
                        Add
                    </Button>
                </Box>
            </CardContent>
        </Card>
    ) : (
        <Card
            component="button"
            color="primary"
            sx={newStageStyle}
            onClick={() => setIsCreate(true)}
        >
            {btnText}
        </Card>
    );
}
