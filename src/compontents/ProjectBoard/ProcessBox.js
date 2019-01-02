import React, { Component } from 'react'
import { connect } from "react-redux";

import ProjectTask from './ProjectTask/ProjectTask';
import { getBacklog } from '../../Redux/actions/backlogActions'
import {
  Card, CardBody,
  CardTitle, Row, Col
} from 'reactstrap';
class ProcessBox extends Component {

  componentDidMount() {
    this.props.getBacklog(this.props.project_ID)
  }


  // renderList() {
  //   return this.props.backlog.project_tasks.map(task => {
  //     return (
  //       <ProjectTask task={task} key={task.id}></ProjectTask>
  //     );
  //   });
  // }




  render() {

    const tasks = this.props.backlog.project_tasks.map(project_task => (
      <ProjectTask key={project_task.id} task={project_task} />
    ));

    console.log('task', tasks)
    let todoTasks = [];
    let doingTasks = [];
    let doneTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.task.status === "TO_DO") {
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
              <CardBody>
                <CardTitle>TO DO</CardTitle>
                <div>{todoTasks}</div>

              </CardBody>
            </Card></Col>
          <Col xs="4">
            <Card>
              <CardBody>
                <CardTitle>DOING</CardTitle>
                <div>{doingTasks}</div>
              </CardBody>
            </Card></Col>
          <Col xs="4">
            <Card>
              <CardBody>
                <CardTitle>DONE</CardTitle>
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
