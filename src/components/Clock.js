import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
  }
  // Life cycle methods
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <h2 onClick={this.tick}>Class based: It is {this.state.date.toLocaleTimeString()}</h2>;
  }
}

export default Clock;
