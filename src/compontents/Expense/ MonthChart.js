import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import moment from "moment";

class
  MonthChart extends Component {
  state = {
    chartData: null
  };

  showall = expense => {
    let output = [];
    for (let i = 1; i < 9; i++) {
      output.push(this.calculateTotal(expense, i));
    }
    return output;
  };

  calculateTotal = (expense, cat) => {
    let expenseFilted = this.props.expense
      .filter(
        item => moment(item.date).format("MMMM") === this.props.ChooseMonth
      )
      .filter(expense => expense.category_id === cat);
    let rentTotal = expenseFilted.reduce(
      (acc, expense) => acc + expense.cost,
      0
    );
    return rentTotal;
  };
  render() {
    if (this.props.expense.length === 0) {
      return <div />;
    }
    let data = {
      labels: [
        "Rent",
        "Food",
        "Transportation",
        "Bills",
        "Groceries",
        "Grft",
        "Others"
      ],
      datasets: [
        {
          label: "Money",
          data: this.showall(this.props.expense),
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(199, 236, 238, 1.0)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(50, 255, 126)"
          ]
        }
      ]
    };
    return (
      <div>
        {" "}
        <Pie
          data={data}
          options={{
            title: {
              display: true,
              text: this.props.ChooseMonth,
              fontSize: 25
            },
            legend: { display: false, position: "right" }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ expense }) => {
  return {
    expense
  };
};

export default connect(
  mapStateToProps,
  null
)(MonthChart);