import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';


import ProcessBox from './ProcessBox';

class ProjectBoard extends Component {
  render() {
    return (
      <Container>
        <br />
        <Link to={`/projectBoard/${this.props.match.params.id}/add`} className=" btn btn-lg ">Create a  Task</Link>
        <br />
        <ProcessBox project_ID={`${this.props.match.params.id}`} />
      </Container>



    )
  }
}

const mapStateToProps = state => ({
  project: state.project
});

const mapDispatchToProps = {



}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectBoard)