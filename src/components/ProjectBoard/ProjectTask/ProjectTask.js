import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import moment from "moment"
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


  onSubmitHandlerImportant = e => {
    e.preventDefault()
    this.props.addProjectTaskButton(this.props.task.projectIdentifier, { ...this.state, important: !this.props.task.important }
    )
    // window.location.reload();
  };


  render() {
    if (!this.props.task) {
      return (<div>Loading tasks</div>)
    } else if (this.props.task && true) {

      let priorityClass;


      if (this.props.task.priority === 1) {
        priorityClass = "color-red";
      } else if (this.props.task.priority === 2) {
        priorityClass = "color-yellow";

      } else if (this.props.task.priority === 3) {
        priorityClass = "color-green";
      }


      const styleDelete = {
        color: "#007bff",
        textDecoration: "none",
        backgroundColor: "transparent"
      }
      const h5style={
        textAlign:'right',
         color:'#94989A',
         fontSize:'1em'
      }

      

      return (

        <div >
          <hr/>

          <div> <span className={`${priorityClass}`} /> {this.props.task.important === true ? (<i className="fas fa-star move-left "  onClick={this.onSubmitHandlerImportant}></i>) : (<i className="far fa-star move-left" onClick={this.onSubmitHandlerImportant}></i>)}</div>




          <h3 >{this.props.task.name}</h3>
          <h4>{this.props.task.note}</h4>
          <h5 style ={h5style}>{moment(this.props.task.dueDate).fromNow()}</h5>
   




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
