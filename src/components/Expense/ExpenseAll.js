import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Container } from "reactstrap";
import { fetchExpense } from "../../Redux/actions/expenseActions";
import Expense from "./Expense";
import { Link } from "react-router-dom";

class ExpenseAll extends Component {

  renderList() {
    console.log(this.props.expense)
    return this.props.expense.map(item => {
      return (
        <Expense key={item.id} item={item} className="list-group" />
      );
    });
  }


  componentDidMount() {
    this.props.fetchExpense()
  }
  render() {
    console.log('yoyoy', this.props)
    if (!this.props.expense) {
      return (
        <div>Loading Expense</div>
      );
    } else {
      console.log('yoyoy2', this.props)
      return (
        <Container>
          <Link to={"/expenseDashboard"} className=" btn btn-lg "><i className="fas fa-long-arrow-alt-left"></i>Dashboard </Link>

          <div className="text-center">
            <h1>LESS IS MORE </h1>
            <h3>One In One out</h3>
          </div>
          <Table striped style={{ marginTop: `3vh` }}>
            <thead>
              <tr>
                <th>#</th>
                <th>DATE</th>
                <th>Catgory</th>
                <th>AMOUNT</th>
                <th>NOTE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </Table>
        </Container>
      )
    }

  }
}

const mapStateToProps = state => (
  {
    expense: state.expense.filter(expense => {
      return expense.category_id === 6;
    })
  });

const mapDispatchToProps = {
  fetchExpense
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExpenseAll);