import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      initial: new Date(),
    };
  }

  componentDidMount() {
    this.tickInterval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval);
  }

  tick() {
    this.setState({ initial: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div className="clock-container">
          <label>
            Time:
            <span> </span>
            {`${this.state.initial.getHours()}`}:
            {`${this.state.initial.getMinutes()}`}:
            {`${this.state.initial.getSeconds()}`}
            <span> </span>
            PDT
          </label>
          <br />
          <label>
            Date:
            <span> </span>
            {this.state.initial.toUTCString().slice(0, 16)}
          </label>
        </div>
      </div>
    );
  }

}

export default Clock;
