import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
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

  componentDidUpdate(prevProps) {
    if (this.props.project.id !== prevProps.project.id) {
      this.setState({
        id: this.props.project.id,
        projectName: this.props.project.projectName,
        projectIdentifier: this.props.project.projectIdentifier,
        description: this.props.project.description,
        start_date: this.props.project.start_date,
        end_date: this.props.project.end_date
      });
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProject(id);
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
      this.props.history.push("/dashboard")
    });
  };

  render() {

    const style = {
      marginTop: '1.5em'

    }
    return (<Container style={style}>
      <Link to={"/dashboard"} className=" btn btn-lg "><i className="fas fa-long-arrow-alt-left"></i>Back </Link>

      <Form onSubmit={this.onSubmitHandler}>
        <FormGroup>
          <Label for="projectName">Project Name</Label>
          <Input
            type="text"
            name="projectName"
            id="projectName"
            placeholder="Input the amount"
            onChange={this.onChangeHandler}
            value={this.state.projectName}
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
          <input
            type="date"
            className="form-control form-control-lg"
            name="start_date"
            value={this.state.start_date}
            onChange={this.onChangeHandler}
          />
        </FormGroup>

        <FormGroup>
          <input
            type="date"
            className="form-control form-control-lg"
            name="end_date"
            value={this.state.end_date}
            onChange={this.onChangeHandler}
          />
        </FormGroup>
        <Button
          type="submit"
          color="primary"
          className="margin-left-12 btn-lg btn-block"
          style={{
            marginRight: `3em`
          }}
        >
          UPDATE
          </Button>
      </Form>
    </Container>
    )
  }
}
const mapDispatchToProps = {
  createProject, getProject
};


const mapStateToProps = state => ({
  project: state.project.project,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProjectForm);