import React, { Component } from "react";
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

export default class PieGraph extends Component {
  state = {
    data: this.props.data,
  };
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "doughnut",
      data: {
        //Bring in data
        labels: [
          "New Confirmed",
          "New Deaths",
          "New Recovered",
          "Total Confirmed",
          "Total Deaths",
          "Total Recovered",
        ],
        datasets: [
          {
            label: "Sales",
            data: [83608, 5534, 31584, 2400051, 165012, 623259],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });
  }
  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
