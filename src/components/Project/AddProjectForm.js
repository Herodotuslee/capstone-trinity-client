import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { createProject } from "../../Redux/actions/projectActions"

class AddProjectForm extends React.Component {



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
      this.props.history.push("/dashboard")
    });
  };



  render() {

    const style = {
      marginTop: '1.5em'

    }
    return (
      <Container style={style}><Form onSubmit={this.onSubmitHandler}>
        <Link to={"/dashboard"} className=" btn btn-lg "><i className="fas fa-long-arrow-alt-left"></i>Dashboard </Link>
        <FormGroup>
          <Label for="projectName">Project Name</Label>
          <Input
            type="text"
            name="projectName"
            id="projectName"
            placeholder="Project Name"
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
          <Label for=" projectIdentifier"> Project ID</Label>
          <Input
            type="text"
            name="projectIdentifier"
            id=" projectIdentifier"
            placeholder="Input the projectID"
            onChange={this.onChangeHandler}
            value={this.state.projectIdentifier}
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
          ADD
          </Button>
      </Form></Container>

    );
  }
}


const mapDispatchToProps = {
  createProject
};


export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddProjectForm)
);