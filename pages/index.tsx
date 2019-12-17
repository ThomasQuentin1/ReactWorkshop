import React, { useState, useEffect } from "react";
import Counter from "../component/Counter";
import Timer from "../component/Timer";

const IndexPage = () => {
  return (
    <div>
      <Counter initCounter={0} />
      <br />
      <br />
      <br />
      <Timer />
    </div>
  );
};

export default IndexPage;

class Welcome extends React.Component<any> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

interface Props {
  value: number;
}

const Component = ({ value }: Props) => {
  useEffect(() => {
    console.log("I am called everytime");
  });
  return <p>{value}</p>;
};

// const Component = ({ value }: Props) => {
//   const newValue = value * 2;
//   return <p>my number is {newValue}</p>;
// };
