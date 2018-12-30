import React, { Component } from 'react'

class ProjectItem extends Component {
  render() {
    return (
      <div>
        <p>Project Item</p>

        <td>{this.props.project.id}</td>

      </div>
    )
  }
}
export default ProjectItem 