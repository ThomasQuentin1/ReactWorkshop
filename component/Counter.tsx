import React from "react";

interface Props {
  initCounter: number;
}

interface State {
  counter: number;
}

export default class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: props.initCounter
    };
  }

  render() {
    return (
      <>
        <p>You clicked {this.state.counter} times</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </>
    );
  }
}
