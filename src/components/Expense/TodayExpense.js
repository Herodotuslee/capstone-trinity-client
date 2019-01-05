import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { Table } from "reactstrap";
import { fetchExpense } from "../../Redux/actions/expenseActions";
import moment from "moment";

// import Item from "./Item";
import Expense from "./Expense";
class TodayExpense extends Component {

  componentDidMount() {
    this.props.fetchExpense()
  }


  renderList() {
    return this.props.expense.map(item => {
      return <Expense key={item.id} item={item} className="list-group" />;
    });
  }

  render() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>DATE</th>
              <th>CATEGORY</th>
              <th>AMOUNT</th>
              <th>NOTE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = ({ expense }) => {
  return {
    expense: expense.filter(expense => {
      return (
        moment(expense.date).format("YYYY-MM-DD") ===
        moment(new Date()).format("YYYY-MM-DD")
      );
    })
  };
};



const mapDispatchToProps = {
  fetchExpense
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodayExpense);