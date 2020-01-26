import React, { Component } from "react";
import countdown from "countdown";
import "./Countdown.css";
export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: "CALCULATING"
    };
  }
  componentDidMount() {
    function getOutput() {
      let examDate = new Date("May 10, 2020 03:24:00");
      let timeLeft = countdown(new Date(), examDate);

      // console.log(`${timeLeft.days} days and ${timeLeft.months} months are left`);
      // console.log();
      const sendHtml = `<div>
      <center>
            ${timeLeft.toHTML()}
            </center>
      </div>`;
      return sendHtml;
    }
    setInterval(() => {
      this.setState({ timeLeft: getOutput() });
    }, 1000);
  }
  render() {
    const { timeLeft } = this.state;
    function createMarkup() {
      return { __html: timeLeft };
    }

    function MyComponent() {
      return <div dangerouslySetInnerHTML={createMarkup()} />;
    }
    return <div className="MainContainer">{MyComponent()}</div>;
  }
}
