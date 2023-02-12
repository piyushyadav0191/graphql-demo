import React from "react";

const Card = ({ title, releaseDate, director }) => {
  console.log(title);
  return (
    <div>
      <h1>Movie name is {title} </h1>
      <h2>Director is {director} </h2>
      <p>It release on {releaseDate} </p>
    </div>
  );
};

export default Card;
