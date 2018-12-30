import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import CreateProjectButton from './Project/CreateProjectButton';
import { connect } from "react-redux";
import { fetchProjects } from "../Redux/actions/projectActions"
class Dashboard extends Component {

  componentDidMount() {
    console.log('this.props', this.props)
    this.props.fetchProjects();
  }



  renderList() {
    return this.props.projects.map(project => {
      return (
        <ProjectItem key={project.id} project={project}></ProjectItem>

      );
    });
  }


  render() {
    // const { projects } = this.props.projects;
    console.log('hi2project', this.props.project)
    if (!this.props.projects) {
      return <div>Loading</div>

    } else {
      console.log('props', this.props)
      return (
        <div>
          <CreateProjectButton></CreateProjectButton>
          {/* <ProjectItem></ProjectItem> */}

          <div>{this.renderList()}</div>
          <p>Dashboard</p>
        </div>
      )
    }

  }
}




const mapStateTopProjects = state => ({
  projects: state.projects
})
const mapDispatchToProps = {
  fetchProjects
}

export default
  connect(
    mapStateTopProjects,
    mapDispatchToProps
  )(Dashboard);