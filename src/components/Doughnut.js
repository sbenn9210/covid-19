import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class DoughnutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
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
            label: "Global",
            backgroundColor: [
              "#B21F00",
              "#C9DE00",
              "#2FDE00",
              "#00A6B4",
              "#6800B4",
            ],
            hoverBackgroundColor: [
              "#501800",
              "#4B5000",
              "#175000",
              "#003350",
              "#35014F",
            ],
            data: this.props.data,
          },
        ],
      },
    };
  }
  render() {
    return (
      <Doughnut
        data={this.state.chartData}
        options={{
          title: {
            display: true,
            text: "Total Global Covid-19 Impact",
            fontSize: 20,
          },
          tooltips: {
            callbacks: {
              label: (tooltipItem, data) => {
                var label = data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index
                ]
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                return `${data.labels[tooltipItem.index]} : ${label}`;
              },
            },
          },
        }}
      />
    );
  }
}

export default DoughnutChart;
