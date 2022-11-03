import React from "react";
import myStore from "../store";
const Movie = () => {
  const { todo, countInput, count, increaseCount } = myStore();
  return (
    <div>
      <h1>안녕 난 무비야{count}</h1>
      <button onClick={increaseCount}>버튼</button>
      <div>
        {todo?.map((item) => {
          return <h1>{item}</h1>;
        })}
      </div>
      <button onClick={() => countInput(5)}>버튼</button>
    </div>
  );
};

export default Movie;
