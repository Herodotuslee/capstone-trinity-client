import React, { Component } from 'react';
import moment from "moment";
import { connect } from "react-redux";
import { deleteExpense } from "../../Redux/actions/expenseActions";
import { Button } from "reactstrap";
class Expense extends Component {
  render() {
    console.log('data', this.props.item.date)
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{moment(this.props.item.date).utcOffset('+0700').format("YYYY-MM-DD")}</td>
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