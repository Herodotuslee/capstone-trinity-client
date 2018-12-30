import React, { Component } from 'react'
import { Link } from "react-router-dom"
class ProjectItem extends Component {
  render() {
    return (
      <div>
        <p>Project Item</p>

        <div>{this.props.project.id}</div>
        <div>{this.props.project.projectName}</div>
        <div>{this.props.project.projectIdentifier}</div>
        <div>{this.props.project.description}</div>

        <Link to={`/project/update/${this.props.project.projectIdentifier}`}>Update</Link>

        {/* <button>Edit</button> */}

      </div>
    )
  }
}
export default ProjectItem 