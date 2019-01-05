import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Row, Col } from 'reactstrap';
import "./color.css"
import { deleteProjectTask, addProjectTask, addProjectTaskButton } from "../../../Redux/actions/backlogActions"

class ProjectTask extends Component {

  state = {
    id: "",
    name: "",
    note: "",
    status: "",
    important: null,
    priority: 0,
    dueDate: null,
    projectIdentifier: ""
  }
  componentDidMount() {
    this.setState({
      id: this.props.task.id,
      name: this.props.task.name,
      note: this.props.task.note,
      status: this.props.task.status,
      important: this.props.task.important,
      priority: this.props.task.priority,
      dueDate: this.props.task.dueDate,
      projectIdentifier: this.props.task.projectIdentifier
    })


  }


  onSubmitHandlerDONE = e => {
    e.preventDefault()
    this.props.addProjectTaskButton(this.props.task.projectIdentifier, { ...this.state, status: 'DONE' }
    )
    // window.location.reload();
  };

  onSubmitHandlerDOING = e => {
    e.preventDefault()
    this.props.addProjectTaskButton(this.props.task.projectIdentifier, { ...this.state, status: 'DOING' }
    )
    // window.location.reload();
  };

  onSubmitHandlerTODO = e => {
    e.preventDefault()
    this.props.addProjectTaskButton(this.props.task.projectIdentifier, { ...this.state, status: 'TODO' }
    )
    // window.location.reload();

  };


  render() {
    if (!this.props.task) {
      return (<div>Loading tasks</div>)
    } else if (this.props.task && true) {

      let priorityString;
      let priorityClass;

      if (this.props.task.important === true && this.props.task.status !== 'DONE') {
        priorityClass = "color-red";
        priorityString = "HIGH";
      } else if (this.props.task.important === false && this.props.task.status !== 'DONE') {
        priorityClass = "color-green";
        priorityString = "MEDIUM";
      }

      const styleDelete = {
        color: "#007bff",
        textDecoration: "none",
        backgroundColor: "transparent"
      }


      return (

        <div >
          <h3 className={`${priorityClass}`}>{this.props.task.name}</h3>
          <h4>albert{this.props.task.note}</h4>
          {/* <h5 className={`${priorityClass}`}>Priority : {priorityString}</h5> */}

          <Row className="justify-content-center d-flex" >
            <Col>{this.props.task.status === 'DOING' ? (<div><i className="fas fa-arrow-left" style={styleDelete} onClick={this.onSubmitHandlerTODO}></i>  </div>) : (<div></div>)}
              {this.props.task.status === 'DONE' ? (<i className="fas fa-arrow-left" style={styleDelete} onClick={this.onSubmitHandlerDOING}></i>) : (<div></div>)}
            </Col>
            <Col className="col-sm-1 ">
              <Link to={`/updateProjectTask/${this.props.project_ID}/${this.props.task.id}`}>
                <i className="far fa-edit pr-1 " style={styleDelete}></i></Link>
            </Col>

            <Col xs="auto" className="col-sm-1 ">
              <i onClick={() => this.props.deleteProjectTask(this.props.project_ID, this.props.task.id)} className="far fa-trash-alt  pr-1 pointer" style={styleDelete}> </i>
            </Col>


            {this.props.task.status === 'DOING' ? (<div><i className="fas fa-arrow-right" style={styleDelete} onClick={this.onSubmitHandlerDONE}></i>  </div>) : (<div></div>)}
            {this.props.task.status === 'TODO' ? (<i className="fas fa-arrow-right" style={styleDelete} onClick={this.onSubmitHandlerDOING}></i>) : (<div></div>)}
            <hr />
            <br /></Row>

          <hr />
          <br />
        </div>





      )

    }


  }
}


const mapDispatchToProps = {
  deleteProjectTask,
  addProjectTask,
  addProjectTaskButton
}

export default
  connect(
    null,
    mapDispatchToProps
  )(ProjectTask);
