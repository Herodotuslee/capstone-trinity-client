import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProject } from '../../Redux/actions/projectActions'
import {
  Button, Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

// import { deleteExpense } from "../../Redux/actions/projectActions";
class ProjectItem extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.project.projectName}</CardTitle>
          <CardSubtitle>{this.props.project.projectIdentifier}</CardSubtitle>
          <CardText>{this.props.project.description}</CardText>
          <Row>
            <Col xs="4"><Link to={`/project/update/${this.props.project.projectIdentifier}`}>
              <Button>Update</Button></Link></Col>
            <Col xs="4"><Button
              color="danger"
              onClick={() => this.props.deleteProject(this.props.project.projectIdentifier)}
            >Delete
          </Button></Col>
            <Col xs="4"> <Link to={`/projectBoard/${this.props.project.projectIdentifier}`}>
              <li className="list-group-item board">
                <i className="fa fa-flag-checkered pr-1"> Project Board </i>
              </li>
            </Link></Col>
          </Row>
        </CardBody>
      </Card>

    )
  }
}
// export default ProjectItem 



const mapDispatchToProps = {
  deleteProject
}

export default
  connect(
    null,
    mapDispatchToProps
  )(ProjectItem);