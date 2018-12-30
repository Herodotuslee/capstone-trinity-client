import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import CreateProjectButton from './Project/CreateProjectButton';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <CreateProjectButton></CreateProjectButton>
        <ProjectItem></ProjectItem>

      </div>
    )
  }
}


export default Dashboard