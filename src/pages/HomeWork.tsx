import { IconButton, Rating } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { styled } from "@mui/material/styles";
import "../App.css";
import CircleIcon from "@mui/icons-material/Circle";
import FastForwardIcon from "@mui/icons-material/FastForward";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { changeWeekday } from "../app/services/weekdaySlice";
const HomeWork = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const date = new Date();
  const dDay = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  let refined = dDay - 1;
  let array = [
    [0, "월"],
    [0, "화"],
    [0, "수"],
    [0, "목"],
    [0, "금"],
    [0, "토"],
    [0, "일"],
  ];
  let min = 0;
  let max = 5;
  for (let i = 0; i < array.length; i++) {
    array[i][0] = Math.floor(Math.random() * (max - min) + 1) + min;
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[refined % 7]);
    refined++;
  }
  console.log(result);

  return (
    <>
      <div>
        <Container
          maxWidth="lg"
          style={{
            color: "#000000",
            textAlign: "center",
            alignItems: "center",
            alignContent: "center",
            backgroundColor: "#ffffff",
            width: 500,
            height: 800,
          }}
        >
          <h3 className="home-work-title">내 일주일은?</h3>
          {result.map((item: any) => (
            <div className="home-work-div" key={item}>
              <h3 className="home-work-font">{item[1]}</h3>
              <Rating
                name="read-only"
                defaultValue={item[0]}
                icon={<CircleIcon fontSize="large" />}
                emptyIcon={<CircleIcon fontSize="large" />}
                readOnly
              />
              <Link
                to={"/reviews/" + item[1]}
                onClick={() => dispatch(changeWeekday(item[1]))}
              >
                <FastForwardIcon />
              </Link>
              {/* <IconButton>
                <FastForwardIcon />
              </IconButton> */}
            </div>
          ))}
        </Container>
      </div>
    </>
  );
};

export default HomeWork;
