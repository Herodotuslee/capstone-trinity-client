import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import CreateProjectButton from './Project/CreateProjectButton';
import { connect } from "react-redux";
import { fetchProjects } from "../Redux/actions/projectActions"
class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  }
  // renderList() {
  //   return this.props.projects.map(project => {
  //     return (
  //       {/* <ProjectItem project={project}></ProjectItem> */ }

  //     );
  //   });
  // }



  render() {
    console.log('hi', this.props)
    if (!this.props.projects) {
      return <div>Loading</div>

    } else {
      console.log('props', this.props)
      return (
        <div>
          <CreateProjectButton></CreateProjectButton>
          {/* <ProjectItem></ProjectItem> */}

          {/* <div>{this.renderList()}</div> */}
          <p>Dashboard</p>
        </div>
      )
    }

  }
}




const mapStateTopProjects = state => ({
  projects: state.projects.fetchProjects
})
const mapDispatchToProps = {
  fetchProjects
}

export default
  connect(
    mapStateTopProjects,
    mapDispatchToProps
  )(Dashboard);