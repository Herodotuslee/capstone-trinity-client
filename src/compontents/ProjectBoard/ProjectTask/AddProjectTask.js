import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { addProjectTask } from "../../../Redux/actions/backlogActions"

import { withRouter } from "react-router-dom";
class AddProjectTask extends React.Component {

  state = {
    summary: "",
    acceptanceCriteria: "",
    status: "",
    priority: 0,
    dueDate: "",
    projectIdentifier: this.props.match.params.id
  }


  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  onSubmitHandler = e => {
    e.preventDefault();
    console.log('paramas', this.props.match.params)
    this.props.addProjectTask(this.props.match.params.id, this.state).then(() => {
      this.setState({
        summary: "",
        acceptanceCriteria: "",
        status: "",
        priority: 0,
        dueDate: "",
        projectIdentifier: this.props.match.params.id
      })
      this.props.history.push(`/projectBoard/${this.props.match.params.id}`)

    });
  };



  render() {
    return (
      <Container><Form onSubmit={this.onSubmitHandler}>
        <FormGroup>
          <Label for="summary">Task Name</Label>
          <Input
            type="text"
            name="summary"
            id="summary"
            placeholder="Input the amount"
            onChange={this.onChangeHandler}
            value={this.state.summary}
          />
        </FormGroup>

        <FormGroup>
          <Label for="acceptanceCriteria">Detail</Label>
          <Input
            type="textarea"
            name="acceptanceCriteria"
            id="acceptanceCriteria"
            placeholder="Input the description"
            onChange={this.onChangeHandler}
            value={this.state.acceptanceCriteria}
          />
        </FormGroup>


        <FormGroup>
          <select
            className="form-control form-control-lg"
            name="status"
            value={this.state.status}
            onChange={this.onChangeHandler}
          >
            <option value="">Select Status</option>
            <option value="TO_DO">TO DO</option>
            <option value="DOING">DOING</option>
            <option value="DONE">DONE</option>
          </select>
        </FormGroup>

        <FormGroup>
          <select
            className="form-control form-control-lg"
            name="priority"
            value={this.state.priority}
            onChange={this.onChangeHandler}
          >
            <option value={0}>Select Priority</option>
            <option value={1}>High</option>
            <option value={2}>Medium</option>
            <option value={3}>Low</option>
          </select>

        </FormGroup>

        <FormGroup>
          <input
            type="date"
            className="form-control form-control-lg"
            name="dueDate"
            value={this.state.dueDate}
            onChange={this.onChangeHandler}
          />
        </FormGroup>

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
      </Form></Container>

    );
  }
}


const mapDispatchToProps = {
  addProjectTask
};


export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddProjectTask)
);