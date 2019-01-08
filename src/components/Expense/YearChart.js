import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Container, Row ,Col} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import MonthChart from "./ MonthChart";
import { fetchExpense } from "../../Redux/actions/expenseActions";
class YearChart extends Component {
  state = {
    chartData: null,
    ChooseMonth: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  };

  componentDidMount() {
    this.props.fetchExpense()
  } d
  // TOTAL
  showall = expense => {
    let output = [];
    for (let i = 1; i < 13; i++) {
      output.push(this.calculateTotal(expense, `${i < 10 ? "0" + i : i}`));
    }
    return output;
  };
  calculateTotal = (expense, month) => {
    let expense2 = this.props.expense.filter(expense =>
      moment(expense.date)
        .format("MM")
        .includes(month)
    );
    let Total = expense2.reduce((acc, expense) => acc + expense.cost, 0);
    return Total;
  };

  // RENT AND THE REST
  showallCategory = (expense, cat) => {
    let output = [];
    for (let i = 1; i < 13; i++) {
      output.push(
        this.calculateCategoryTotal(cat, expense, `${i < 10 ? "0" + i : i}`)
      );
    }
    return output;
  };

  calculateCategoryTotal = (cat, expense, month) => {
    let expense2 = this.props.expense
      .filter(item => item.category_id === cat)
      .filter(expense =>
        moment(expense.date)
          .format("MM")
          .includes(month)
      );
    let Total = expense2.reduce((acc, expense) => acc + expense.cost, 0);

    return Total;
  };

  renderList() {
    return this.state.ChooseMonth.map(item => {
      return <Col sm={{size:4}}><MonthChart ClassName="center" key={item.id} ChooseMonth={item} /></Col>;
    });
  }

  render() {
    let data = {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Total",
          data: this.showall(this.props.expense),
          options: { showLines: false, scales: { yAxes: [{ stacked: true }] } },
          type: "line",
          lineTension: 0,
          fill: false,
          borderColor: ["black"]
        },
        {
          label: "Rent",
          data: this.showallCategory(this.props.expense, 1),
          options: { showLines: false, scales: { yAxes: [{ stacked: true }] } },
          type: "line",
          lineTension: 0,
          fill: false,
          borderColor: ["rgba(255, 99, 132, 0.6)"]
        },
        {
          label: "FOOD",
          data: this.showallCategory(this.props.expense, 2),
          options: { showLines: false, scales: { yAxes: [{ stacked: true }] } },
          type: "line",
          lineTension: 0,
          fill: false,
          borderColor: ["rgba(54, 162, 235, 0.6)"]
        },
        {
          label: "Transportation",
          data: this.showallCategory(this.props.expense, 3),
          options: { showLines: false, scales: { yAxes: [{ stacked: true }] } },
          type: "line",
          lineTension: 0,
          fill: false,
          borderColor: ["rgba(255, 206, 86, 0.6)"]
        },
        {
          label: "Bills",
          data: this.showallCategory(this.props.expense, 4),
          options: { showLines: false, scales: { yAxes: [{ stacked: true }] } },
          type: "line",
          lineTension: 0,
          fill: false,
          borderColor: ["rgba(75, 192, 192, 0.6)"]
        },
        {
          label: "Social",
          data: this.showallCategory(this.props.expense, 5),
          options: { showLines: false, scales: { yAxes: [{ stacked: true }] } },
          type: "line",
          lineTension: 0,
          fill: false,
          borderColor: ["rgba(153, 102, 255, 0.6)"]
        },
        {
          label: "Groceries",
          data: this.showallCategory(this.props.expense, 6),
          options: { showLines: false, scales: { yAxes: [{ stacked: true }] } },
          type: "line",
          lineTension: 0,
          fill: false,
          borderColor: ["rgba(255, 159, 64, 0.6)"]
        },
        {
          label: "Gift",
          data: this.showallCategory(this.props.expense, 7),
          options: { showLines: false, scales: { yAxes: [{ stacked: true }] } },
          type: "line",
          lineTension: 0,
          fill: false,
          borderColor: ["rgba(149, 175, 192,1.0)"]
        },
        {
          label: "Others",
          data: this.showallCategory(this.props.expense, 8),
          options: { showLines: false, scales: { yAxes: [{ stacked: true }] } },
          type: "line",
          lineTension: 0,
          fill: false,
          borderColor: ["rgba(50, 255, 126)"]
        }
      ]
    };
  
    return (
      <Container>
        <Link to={"/expenseDashboard"} className=" btn btn-lg "><i className="fas fa-long-arrow-alt-left"></i>Dashboard </Link>

        <Line
          data={data}
          options={{
            title: { display: true, text: "2019 Expense", fontSize: 25 }
          }}
        />
        <Row> {this.renderList()}</Row>
      </Container>
    );
  }
}

const mapStateToProps = state => (
  {
    expense: state.expense
  });

const mapDispatchToProps = {
  fetchExpense
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(YearChart);