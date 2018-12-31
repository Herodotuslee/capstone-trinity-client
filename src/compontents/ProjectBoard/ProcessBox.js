import React, { Component } from 'react'
import {
  Button, Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import ProjectTask from './ProjectTask.js/ProjectTask';

class ProcessBox extends Component {
  render() {
    return (
      <div>
        <br></br>
        <Row>
          <Col xs="4">
            <Card>
              <CardBody>
                <CardTitle>TO DO</CardTitle>

                <ProjectTask></ProjectTask>
                <ProjectTask></ProjectTask>
                <ProjectTask></ProjectTask>
                <ProjectTask></ProjectTask>
              </CardBody>
            </Card></Col>
          <Col xs="4">
            <Card>
              <CardBody>
                <CardTitle>DOING</CardTitle>
                <ProjectTask></ProjectTask>
              </CardBody>
            </Card></Col>
          <Col xs="4">
            <Card>
              <CardBody>
                <CardTitle>DONE</CardTitle>
                <ProjectTask></ProjectTask>
              </CardBody>
            </Card></Col>
        </Row>



      </div>
    )
  }
}

export default ProcessBox 
