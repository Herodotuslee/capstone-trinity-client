import React, { Component } from 'react'
import { addProjectTask } from '../../Redux/actions/blacklogActions';
import { Button, Container } from 'reactstrap';
import ProcessBox from './ProcessBox';
class ProjectBoard extends Component {
  render() {
    return (
      <Container>
        <br />
        <Button>Add Project Task</Button>
        <br />
        <ProcessBox />

      </Container>



    )
  }
}


export default ProjectBoard