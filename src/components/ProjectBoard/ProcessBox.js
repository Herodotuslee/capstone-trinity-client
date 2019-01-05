import React, { Component } from 'react'
import { connect } from "react-redux";

import ProjectTask from './ProjectTask/ProjectTask';
import { getBacklog } from '../../Redux/actions/backlogActions'
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
class ProcessBox extends Component {

  componentDidMount() {
    this.props.getBacklog(this.props.project_ID)
  }

  render() {
    const tasks = this.props.backlog.project_tasks.map(project_task => (
      <ProjectTask key={project_task.id} task={project_task} project_ID={this.props.project_ID} />
    ));


    let todoTasks = [];
    let doingTasks = [];
    let doneTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.task.status === "TODO") {
        todoTasks.push(tasks[i]);
      }

      if (tasks[i].props.task.status === "DOING") {
        doingTasks.push(tasks[i]);
      }

      if (tasks[i].props.task.status === "DONE") {
        doneTasks.push(tasks[i]);
      }
    }


    return (
      <div>
        <br></br>
        <Row>
          <Col xs="4">
            <Card>
              <h2 className="bg-light text-center text-primary">TO DO</h2>
              <CardBody>
                <div>{todoTasks}</div>
              </CardBody>
            </Card></Col>
          <Col xs="4">
            <Card>
              <h2 className="bg-light text-center text-primary">WORKING ON</h2>
              <CardBody>

                <div>{doingTasks}</div>
              </CardBody>
            </Card></Col>
          <Col xs="4">
            <Card>
              <h2 className="bg-light text-center text-primary">DONE</h2>
              <CardBody>

                <div>{doneTasks}</div>
              </CardBody>
            </Card></Col>
        </Row>



      </div>
    )
  }
}


const mapStateToProps = state => ({
  backlog: state.backlog
});

const mapDispatchToProps = {

  getBacklog
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProcessBox);
