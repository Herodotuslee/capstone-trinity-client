import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import moment from "moment";
class TodayChart extends Component {


  state = {
    chartData: null
  };

  showall = expense => {

    let output = [];
    for (let i = 1; i < 9; i++) {
      output.push(this.calculateTotal(expense, i));
    }
    console.log("output", output)
    return output;
  };

  calculateTotal = (expense, cat) => {
    let expense1 = this.props.expense.filter(
      expense => expense.category_id === cat
    );
    let rentTotal = expense1.reduce((acc, expense) => acc + expense.cost, 0);
    return rentTotal;
  };


  render() {
    console.log('xxxx', this.props)
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
            "rgba(199, 236, 238, 1.0)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(50, 255, 126)"
          ]
        }
      ]
    };
    return (
      <div>
        <Pie
          data={data}
          options={{
            title: { display: true, text: "Daily Expense", fontSize: 20 },
            legend: { display: true, position: "right" }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ expense }) => {
  return {
    expense: expense.filter(expense => {
      return (
        moment(expense.date).utcOffset('-0700').format("YYYY-MM-DD") ===
        moment(new Date()).utcOffset('-0700').format("YYYY-MM-DD")
      );
    })
  };
};

export default connect(
  mapStateToProps,
  null
)(TodayChart);