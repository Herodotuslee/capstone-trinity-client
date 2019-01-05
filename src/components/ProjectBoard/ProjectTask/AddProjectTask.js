import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { addProjectTask } from "../../../Redux/actions/backlogActions"

import { withRouter } from "react-router-dom";
class AddProjectTask extends React.Component {

  state = {
    name: "",
    note: "",
    status: "",
    priority: 0,
    dueDate: "",
    important: false,
    projectIdentifier: this.props.match.params.id
  }


  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  onSubmitHandler = e => {
    e.preventDefault();
    this.props.addProjectTask(this.props.match.params.id, this.state).then(() => {
      this.setState({
        name: "",
        note: "",
        status: "",
        priority: 0,
        dueDate: "",
        important: false,
        projectIdentifier: this.props.match.params.id
      })
      this.props.history.push(`/projectBoard/${this.props.match.params.id}`)

    });
  };



  render() {

    const style = {
      marginTop: '3em'

    }
    return (
      <Container style={style} >
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="summary">Task Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Input the amount"
              onChange={this.onChangeHandler}
              value={this.state.name}
            />
          </FormGroup>

          <FormGroup>
            <Label for="acceptanceCriteria">Detail</Label>
            <Input
              type="textarea"
              name="note"
              id="note"
              placeholder="Input the description"
              onChange={this.onChangeHandler}
              value={this.state.note}
            />
          </FormGroup>


          <FormGroup>
            <select
              className="form-control form-control-lg"
              name="status"
              value={this.state.status}
              onChange={this.onChangeHandler}
            >
              <option value="TODO">Select Status</option>
              <option value="TODO">TO DO</option>
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
            <select
              className="form-control form-control-lg"
              name="priority"
              value={this.state.important}
              onChange={this.onChangeHandler}
            >
              <option value={false}>Select Important </option>
              <option value={true}>Important</option>
              <option value={false}>Not Important</option>
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
        </Form>
      </Container>

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