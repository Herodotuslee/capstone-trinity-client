import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { addExpense } from "../../Redux/actions/expenseActions";

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

  handleChangeDate = e => {
    this.setState({
      date: e.target.value
    });
  };
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
        {/* <FormGroup
        >
          <DatePicker className="btn-lg btn-block"
            id="date"
            onChange={this.onChange}
            value={moment(this.state.date).utcOffset('+0700').format("YYYY-MM-DD")}
          />

        </FormGroup> */}

        <FormGroup>
          <input
            type="date"
            className="form-control form-control-lg"
            name="date"
            id="date"
            value={this.state.date}
            onChange={this.handleChangeDate}
          />
        </FormGroup>
        <Button
          type="submit"
          color="primary"
          className="btn-lg btn-block"
          style={{
            marginRight: `3em`
          }}
        >
          ADD
          </Button>
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