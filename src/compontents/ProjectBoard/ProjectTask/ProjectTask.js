import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./color.css"
import { deleteProjectTask } from "../../../Redux/actions/backlogActions"

class ProjectTask extends Component {
  render() {
    if (!this.props.task) {
      return (<div>Loading tasks</div>)
    } else {

      let priorityString;
      let priorityClass;

      if (this.props.task.priority === 1) {
        priorityClass = "color-red";
        priorityString = "HIGH";
      } else if (this.props.task.priority === 2) {
        priorityClass = "color-blue";
        priorityString = "MEDIUM";
      } else {
        priorityClass = "color-green";
        priorityString = "LOW";

      }

      return (

        <div>
          <h3 className={`${priorityClass}`}>{this.props.task.name}</h3>
          <h4>{this.props.task.note}</h4>
          {/* <h5 className={`${priorityClass}`}>Priority : {priorityString}</h5> */}


          <li className="list-group-item board">
            <Link to={`/updateProjectTask/${this.props.project_ID}/${this.props.task.id}`}>
              <i className="far fa-edit pr-1"> Edit</i></Link>
          </li>
          <li className="list-group-item board" onClick={() => this.props.deleteProjectTask(this.props.project_ID, this.props.task.id)}>
            <i className="far fa-trash-alt  pr-1 pointer"> Delete</i>
          </li>
          <hr></hr>


        </div >





      )

    }


  }
}


const mapDispatchToProps = {
  deleteProjectTask
  // addProjectTask
}

export default
  connect(
    null,
    mapDispatchToProps
  )(ProjectTask);
