import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";
import { addExpense } from "../../Redux/actions/expenseActions";
// import TodayChart from "./TodayChart";
// import moment from "moment";
// import Calendar from "react-calendar";
class Add extends Component {
  state = {
    cost: "",
    note: "",
    category_id: "1",
    date: new Date()
  };
  handleChangePay = e => {
    this.setState({
      cost: e.target.value
    });
  };

  handleChangeCategory = e => {
    console.log(e);
    this.setState({
      category_id: e.target.value
    });
  };

  handleChangeContent = e => {
    this.setState({
      note: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addExpense(this.state).then(() => {
      this.setState({
        cost: "",
        note: ""
      });
    });
  };

  onChange = date => this.setState({ date });

  render() {

    const style = {
      marginTop: '1.5em'

    }
    return (
      <Container style={style}><Form onSubmit={this.handleSubmit}>
      
        {/* <TodayChart></TodayChart> */}
        <FormGroup>
          <Label for="cost">Cost</Label>
          <Input
            type="number"
            name="cost"
            id="cost"
            placeholder="Input the amount (Number only)"
            onChange={this.handleChangePay}
            value={this.state.cost}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Category</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={this.handleChangeCategory}
          >
            <option value="1">Rent</option>
            <option value="2">Food</option>
            <option value="3">Transportation</option>
            <option value="4">Bills</option>
            <option value="5">Social</option>
            <option value="6">Groceries</option>
            <option value="7">Gift</option>
            <option value="8">Other</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="note">Note</Label>
          <Input
            type="text"
            name="note"
            id="note"
            onChange={this.handleChangeContent}
            value={this.state.note}
          />
        </FormGroup>
        <FormGroup
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <DatePicker
            id="date"
            onChange={this.onChange}
            value={this.state.date}
          />
          <Button
            type="submit"
            color="primary"
            className="margin-left-12"
            style={{
              marginRight: `3em`
            }}
          >
            ADD
          </Button>
        </FormGroup>
      </Form></Container>

    );
  }
}

const mapDispatchToProps = {
  addExpense
};

export default connect(
  null,
  mapDispatchToProps
)(Add);