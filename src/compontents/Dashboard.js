import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import CreateProjectButton from './Project/CreateProjectButton';
import { connect } from "react-redux";
import { fetchProjects } from "../Redux/actions/projectActions"
import { Container } from 'reactstrap';
class Dashboard extends Component {

  componentWillMount() {
    console.log('this.props', this.props)
    this.props.fetchProjects();
  }

  renderList() {
    return this.props.project.projects.map(project => {
      return (
        <ProjectItem key={project.id} project={project}></ProjectItem>
      );
    });
  }
  componentDidUpdate(prevProps) {
    console.log("PREV PROPS ARE", prevProps);
    console.log("CURRENT PROPS", this.props);
  }


  render() {
    console.log('this.props', this.props.project.projects)
    if (!this.props.project.projects) {
      return <div>Loading</div>
    } else {
      console.log('props', this.props)
      return (
        <Container>
          <br></br>
          <CreateProjectButton></CreateProjectButton>
          <br></br>
          <div>{this.renderList()}</div>
        </Container>
      )
    }
  }
}


const mapStateToProps = state => ({
  project: state.project
});

const mapDispatchToProps = {
  fetchProjects
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard);