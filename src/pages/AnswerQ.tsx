import { Rating } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const AnswerQ: React.FC = () => {
  const dDay = useSelector((state: RootState) => state.counter.weekday);

  return (
    <div className="home-work-div">
      <h3 className="home-work-font">{dDay}</h3>
      <Rating
        name="size-large"
        defaultValue={0}
        icon={<CircleIcon fontSize="large" />}
        emptyIcon={<CircleIcon fontSize="large" />}
      />
      {/* <IconButton>
      <FastForwardIcon />
    </IconButton> */}
    </div>
  );
};

export default AnswerQ;
