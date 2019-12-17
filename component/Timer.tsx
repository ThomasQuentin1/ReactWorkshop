import React from "react";

interface State {
  value: number;
  interval: NodeJS.Timeout | null;
}

export default class Timer extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      interval: null
    };
  }

  render() {
    return (
      <>
        <p>The value is {this.state.value}</p>
      </>
    );
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ value: Math.random() });
    }, 500);
    this.setState({ interval });
  }

  componentWillUnmount() {
    if (this.state.interval) clearInterval(this.state.interval);
  }
}
