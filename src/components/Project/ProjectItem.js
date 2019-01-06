import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProject } from '../../Redux/actions/projectActions';
import "../ProjectBoard/ProjectTask/color.css"
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
class ProjectItem extends Component {


  render() {

    return (
      <Card>
        <CardBody>
          <Row>
            <Col xs="8"> <CardTitle>{this.props.project.projectName}</CardTitle>
              <CardSubtitle>{this.props.project.projectIdentifier}</CardSubtitle>
              <CardText>{this.props.project.description}</CardText></Col>
            <Col xs="4">
              <li className="list-group-item board"><Link to={`/projectBoard/${this.props.project.projectIdentifier}`}>
                <i className="fas fa-tasks"> Project Tasks </i>
              </Link>
              </li>
              <li className="list-group-item board">
                <Link to={`/project/update/${this.props.project.projectIdentifier}`}>
                  <i className="far fa-edit pr-1"> Edit</i></Link>
              </li>
              <li className="list-group-item board" onClick={() => this.props.deleteProject(this.props.project.projectIdentifier)}>
                <i className="far fa-trash-alt  pr-1 pointer"> Delete</i>
              </li>
            </Col>
          </Row>
        </CardBody>
      </Card>

    )
  }
}


const mapDispatchToProps = {
  deleteProject
}

export default
  connect(
    null,
    mapDispatchToProps
  )(ProjectItem);