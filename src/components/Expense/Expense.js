import React, { Component } from 'react';
import moment from "moment";
import { connect } from "react-redux";
import { deleteExpense } from "../../Redux/actions/expenseActions";
// import { Button } from "reactstrap";
class Expense extends Component {
  render() {
    console.log('data', this.props.item.date)

    // let category = ''
    // if (this.props.item.category_id === 1) {
    //   category = "Rent"
    // }
    // if (this.props.item.category_id === 2) {
    //   category = "Food"
    // }
    // if (this.props.item.category_id === 3) {
    //   category = "Food"
    // }
    // if (this.props.item.category_id === 4) {
    //   category = "Food"
    // }
    // if (this.props.item.category_id === 5) {
    //   category = "Food"
    // }
    // if (this.props.item.category_id === 6) {
    //   category = "Food"
    // }
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{moment(this.props.item.date).utcOffset('-0700').format("YYYY-MM-DD")}</td>
        <td>{this.props.item.category_id}</td>
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