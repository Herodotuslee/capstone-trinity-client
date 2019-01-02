import React, { Component } from 'react'
import {
  Button
} from 'reactstrap';
class ProjectTask extends Component {
  render() {


    if (!this.props.task) {
      return (<div>Loading tasks</div>)
    } else {

      return (

        <div>
          <h2>{this.props.task.acceptance_criteria}</h2>
          <h5>Priority : {this.props.task.priority}</h5>
          <h5>{this.props.task.summary}</h5>
          <Button>Edit</Button>
          <Button>Delete</Button>


          <hr></hr>
        </div>

      )

    }


  }
}


export default ProjectTask