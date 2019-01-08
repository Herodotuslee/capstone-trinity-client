import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Container, Row, Col } from "reactstrap";
import Calendar from "react-calendar";
import moment from "moment";

import { fetchExpense } from "../../Redux/actions/expenseActions";
import PieChooseDate from "./PieChooseDate";
import Expense from "./Expense";
// import Picker from "react-month-picker";
class ShowDatePage extends Component {
  state = {
    date: new Date(),
    dateExpenses: []
  };


  componentDidMount() {
    this.props.fetchExpense()
  }


  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.expense.length !== this.props.expense.length ||
      this.state.date !== prevState.date
    ) {
      this.setState({
        dateExpenses: this.props.expense.filter(expense => {
          return (
            moment(expense.date).format("YYYY-MM-DD") ===
            moment(this.state.date).format("YYYY-MM-DD")
          );
        })
      });
    }
  };

  handleDrill = () => {
    console.log('hihihihihihih')
  }


  onChange = date => this.setState({ date });

  renderList() {
    return this.state.dateExpenses.map(item => {
      return <Expense key={item.id} item={item} className="list-group" />;
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: `2em 0 2em 0`
              }}
            >
              <Calendar onChange={this.onChange} value={this.state.date} onClickDay={this.handleDrill} />
            </div>
          </Col>
          <Col>
            <PieChooseDate
              Choosedate={moment(this.state.date).format("YYYY-MM-DD")}
            />
          </Col>
        </Row>

        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>DATE</th>
              <th>CATEGORY</th>
              <th>AMOUNT</th>
              <th>NOTE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = ({ expense }) => {
  return { expense };
};

const mapDispatchToProps = {
  fetchExpense
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDatePage);