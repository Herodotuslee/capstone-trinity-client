import React, { Component } from 'react'

import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

import { addSchedule } from "../Redux/actions/scheduleActions";
// import moment from "moment"
class Schedule extends Component {
  state = {
    location: "",
    note: "",
    type: "",
    date: ""
  };


  handleChangeLocation = e => {
    this.setState({
      location: e.target.value
    });
  };

  handleChangeType = e => {
    this.setState({
      type: e.target.value
    });
  };

  handleChangeNote = e => {
    this.setState({
      note: e.target.value
    });
  };


  handleChangeDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSchedule(this.state).then(() => {
      this.setState({
        location: "",
        type: ""
      });
    });
  };


  render() {

    const style = {
      marginTop: '1.5em'

    }
    return (
      <Container style={style}><Form onSubmit={this.handleSubmit}>


        <FormGroup>
          <Label for="location">Location</Label>
          <Input
            type="text"
            name="location"
            id="location"
            placeholder="Input the location"
            onChange={this.handleChangeLocation}
            value={this.state.location}
          />
        </FormGroup>


        <FormGroup>
          <Label for="exampleSelect">Type</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={this.handleChangeType}
          >
            <option value="Date">Date</option>
            <option value="Interview">Interview</option>
            <option value="Sport">Sport</option>

          </Input>
        </FormGroup>



        <FormGroup>
          <Label for="location">Note</Label>
          <Input
            type="text"
            name="note"
            id="note"
            placeholder="Input the note"
            onChange={this.handleChangeNote}
            value={this.state.note}
          />
        </FormGroup>

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
          Let's Date
          </Button>
      </Form></Container>

    );
  }
}

const mapDispatchToProps = {
  addSchedule

};

export default connect(
  null,
  mapDispatchToProps
)(Schedule);