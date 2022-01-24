export const randomN = [];

export const randomMaker = () => {
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

  return array;
};
