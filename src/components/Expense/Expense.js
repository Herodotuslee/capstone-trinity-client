import React, { Component } from 'react';
import moment from "moment";
import { connect } from "react-redux";
import { deleteExpense } from "../../Redux/actions/expenseActions";
// import { Button } from "reactstrap";


class Expense extends Component {
  render() {
    let category;
    if (this.props.item.category_id === 1) {
      category = "Rent"
    }
    if (this.props.item.category_id === 2) {
      category = "Food"
    }
    if (this.props.item.category_id === 3) {
      category = "Transportation"
    }
    if (this.props.item.category_id === 4) {
      category = "Bill"
    }
    if (this.props.item.category_id === 5) {
      category = "Social"
    }
    if (this.props.item.category_id === 6) {
      category = "Groceries"
    }
     if (this.props.item.category_id === 7) {
      category = "Gift"
    }
      if (this.props.item.category_id === 8) {
      category = "Other"
    }
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{moment(this.props.item.date).utcOffset('-0700').format("YYYY-MM-DD")}</td>
        <td>{category}</td>
        <td>$ {this.props.item.cost}</td>
        <td>{this.props.item.note}</td>
        <td>
          <i className="fa fa-times" aria-hidden="true" color="danger"
            onClick={() => this.props.deleteExpense(this.props.item.id)}></i>
        </td>
      </tr>
    )
  }
}


const mapDispatchToProps = {
  deleteExpense
}
export default
  connect(
    null,
    mapDispatchToProps
  )(Expense);