import { Button, Rating } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Link } from "react-router-dom";

const AnswerQ: React.FC = () => {
  const dDay = useSelector((state: RootState) => state.counter.weekday);
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <div className="home-work-answer-div">
      <div className="home-work-answer-weekday">
        <h3
          className="answer-title"
          style={{
            backgroundColor: "#cc6d2e",
            padding: 5,
            color: "white",
            borderRadius: 10,
          }}
        >
          {dDay}요일
        </h3>
        <h3 className="answer-title">평점 남기기</h3>
      </div>
      <Rating
        name="size-large"
        defaultValue={0}
        value={value}
        icon={<CircleIcon fontSize="large" />}
        emptyIcon={<CircleIcon fontSize="large" />}
        onChange={(event, newValue) => setValue(newValue)}
      />
      <Link to={"/"}>
        <Button
          variant="contained"
          style={{
            margin: 50,
            backgroundColor: "#6d106d",
            padding: 20,
            width: 180,
          }}
        >
          평점남기기
        </Button>
      </Link>

      {/* <button style={{ padding: 10}}>
        평점남기기
      </button> */}
    </div>
  );
};

export default AnswerQ;
