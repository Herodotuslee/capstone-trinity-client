import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Card } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { addProjectTask, getProjectTask } from "../../../Redux/actions/backlogActions"

// import { createProject, getProject } from "../../Redux/actions/projectActions"
class UpdateProjectTaskForm extends Component {

  state = {
    id: "",
    name: "",
    note: "",
    status: "",
    important: "",
    priority: 0,
    dueDate: "",
    projectIdentifier: this.props.match.params.id
  }

  componentDidMount() {
    this.props.getProjectTask(this.props.match.params.backlog_id, this.props.match.params.pt_id);

  }
  // this.props.project_task

  componentDidUpdate(prevProps) {
    if (this.props.project_task.id !== prevProps.project_task.id || this.state.id !== prevProps.project_task.id) {
      this.setState({
        id: this.props.project_task.id,
        name: this.props.project_task.name,
        note: this.props.project_task.note,
        status: this.props.project_task.status,
        priority: this.props.project_task.priority,
        dueDate: this.props.project_task.dueDate,
        projectIdentifier: this.props.project_task.projectIdentifier
      });
    }
  }



  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  onSubmitHandler = e => {
    e.preventDefault();
    this.props.addProjectTask(this.props.match.params.backlog_id, this.state).then(() => {
      this.setState({
        name: "",
        note: "",
        status: "",
        priority: 0,
        dueDate: "",
        important: "",
        projectIdentifier: this.props.match.params.id
      })
      this.props.history.push(`/projectBoard/${this.props.match.params.backlog_id}`)

    });
  };




  render() {

    const style = {
      marginTop: '3em'
    }

    if (!this.props.project_task) {
      return (<div>Loading</div>)
    } else {
      return (

        <Container style={style}>
          <Form onSubmit={this.onSubmitHandler}>
            <FormGroup>
              <Label for="name">Task Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Input the Name"
                onChange={this.onChangeHandler}
                value={this.state.name}
              />
            </FormGroup>

            <FormGroup>
              <Label for="note">Detail</Label>
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
                <option value="">Select Status</option>
                <option value="TODO">TO DO</option>
                <option value="DOING">DOING</option>
                <option value="DONE">DONE</option>
              </select>
            </FormGroup>

            <FormGroup>
              <select
                className="form-control form-control-lg"
                name="important"
                value={this.state.important}
                onChange={this.onChangeHandler}
              >
                <option value="">Select Important</option>
                <option value={true}>Important</option>
                <option value={false}>Not Important</option>

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
          </Form>
        </Container>)
    }


    ;
  }
}

const mapDispatchToProps = {
  addProjectTask, getProjectTask
};
const mapStateToProps = state => ({
  project_task: state.backlog.project_task
});


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UpdateProjectTaskForm)
);