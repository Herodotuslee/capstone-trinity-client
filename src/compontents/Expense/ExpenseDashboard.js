import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
// import AddExpense from "./AddExpense";
// import Chart from "./Chart";
// import ShowTodayCreate from "./ShowTodayCreate";
import AddExpenseForm from "./AddExpenseForm";
import TodayChart from "./TodayChart";
import TodayExpense from "./TodayExpense";

class ExpenseDashboard extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <AddExpenseForm></AddExpenseForm>
            </Col>
            <Col>
              <TodayChart></TodayChart>
              {/* <Chart legendPosition="bottom" /> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <TodayExpense></TodayExpense>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ExpenseDashboard;