import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { createProject, getProject } from "../../Redux/actions/projectActions"
class UpdateProjectForm extends Component {

  state = {
    projectName: "ddd",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: "",
    created_At: "",
    updated_At: ""
  }

  componentWillReceiveProps(nextProps) {

    const {
      id,
      projectName,
      projectIdentifier,
      description,
      start_date,
      end_date
    } = nextProps.project;

    this.setState({
      id,
      projectName,
      projectIdentifier,
      description,
      start_date,
      end_date
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
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

  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   this.props.getProject(id, this.props.history);
  // }

  // componentWillUpdate() {
  //   this.props.getProject(this.props.match.params.id)
  //   console.log('this.props.project', this.props.project)
  //   this.setState({ ...this.props.project.project });
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.project && this.state.id !== this.props.project.id) {
  //     this.setState({ ...this.props.project });
  //   }
  // }


  render() {
    console.log('this.props', this.props)
    return (<Container>

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
          className="margin-left-12"
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