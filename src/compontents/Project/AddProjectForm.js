import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import PropTypes from "prop-types"
import { connect } from 'react-redux';
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


  // onSubmitHandler = e => {
  //   e.preventDefault();
  //   const newProject = {
  //     projectName: this.state.projectName,
  //     projectIdentifier: this.state.projectIdentifier,
  //     description: this.state.description,
  //     start_date: this.state.start_date,
  //     end_date: this.end_date
  //   }
  //   this.props.createProject(newProject, this.props.histroy)
  // }


  onSubmitHandler = e => {
    e.preventDefault();
    this.props.createProject(this.state).then(() => {
      this.setState({
        projectName: "",
        projectIdentifier: "",
        description: "",
        start_date: "",
        end_date: ""
      });
    });
  };


  render() {
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
    );
  }
}

// AddProjectForm.PropTypes = {
//   createProject: PropTypes.func.isRequired
// }
// export default connect(null, { createProject })(C);

// export default AddProjectForm

const mapDispatchToProps = {
  createProject
};

export default connect(
  null,
  mapDispatchToProps
)(AddProjectForm);
