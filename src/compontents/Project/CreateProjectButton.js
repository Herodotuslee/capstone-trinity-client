import React, { Component } from 'react'
import { Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
class CreateProjectButton extends Component {
  render() {
    return (
      <div>
        <Link to="/project/add" className=" btn btn-lg ">
          Create a Project
      </Link>
      </div>
    )
  }
}

export default CreateProjectButton