import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { createProject, getProject } from "../../Redux/actions/projectActions"
class UpdateProjectForm extends Component {

  state = {
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: "",
    created_At: "",
    updated_At: ""
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  onSubmitHandler = e => {
    e.preventDefault();
    this.props.createProject(this.state).then(() => {
      this.setState({
        projectName: "",
        projectIdentifier: "",
        description: "",
        start_date: "",
        end_date: ""
      })
    }); this.props.history.push("/dashboard");
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }



  render() {
    console.log('this.props', this.props)
    return (
      <Form onSubmit={this.onSubmitHandler}>
        <FormGroup>
          <Label for="projectName">Project Name</Label>
          <Input
            type="text"
            name="projectName"
            id="projectName"
            placeholder="Input the amount"
            onChange={this.onChangeHandler}
            value={this.props.projectName}
          />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Input the description"
            onChange={this.onChangeHandler}
            value={this.state.description}
          />
        </FormGroup>

        <FormGroup>
          <Label for=" projectIdentifier"> Project Identifier</Label>
          <Input
            type="text"
            name="projectIdentifier"
            id=" projectIdentifier"
            placeholder="Input the  projectIdentifier"
            onChange={this.onChangeHandler}
            value={this.state.projectIdentifier}
            disabled
          />
        </FormGroup>

        <FormGroup>
          <Label for="start_date">start_date</Label>
          <Input
            type="text"
            name="start_date"
            id="start_date"
            placeholder="Input the start_date"
            onChange={this.onChangeHandler}
            value={this.state.start_date}
          />
        </FormGroup>

        <FormGroup>
          <Label for="end_date">end_date</Label>
          <Input
            type="text"
            name="end_date"
            id="end_date"
            placeholder="Input the end_date"
            onChange={this.onChangeHandler}
            value={this.state.end_date}
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
    )
  }
}
const mapDispatchToProps = {
  createProject, getProject
};


const mapStateToProps = state => ({
  project: state.projects.project
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProjectForm);