import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Container } from "reactstrap";
import { fetchSchedule, deleteSchedule } from "../Redux/actions/scheduleActions";
import { Link } from "react-router-dom";

class ScheduleAll extends Component {

  renderList() {
    console.log(this.props.schedule)
    return this.props.schedule.map(item => {
      return (
        <tr key={item.id} >
          <td>{item.id}</td>
          <td>{item.date}</td>
          <td>{item.type}</td>
          <td>{item.location}</td>
          <td>{item.note}</td>
          <td> <i className="fa fa-times" aria-hidden="true" color="danger"
            onClick={() => this.props.deleteSchedule(item.id)}></i></td>
         
        </tr>
      );
    });
  }


  componentDidMount() {
    this.props.fetchSchedule()
  }
  render() {

    if (!this.props.schedule) {
      return (
        <div>Loading Schedules</div>
      );
    } else {

      return (
        <Container>
          <Link to={"/expenseDashboard"} className=" btn btn-lg "><i className="fas fa-long-arrow-alt-left"></i>Dashboard </Link>

          <div className="text-center">
            <h1>ENJOY YOUR DATE</h1>
            <h3>PASS THE INTERVIEW</h3>
          </div>
          <Table striped style={{ marginTop: `3vh` }}>
            <thead>
              <tr>
                <th>#</th>
                <th>DATE</th>
                <th>Type</th>
                <th>Location</th>
                <th>Note</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </Table>
        </Container>
      )
    }

  }
}

const mapStateToProps = state => (
  {
    schedule: state.schedule

  });

const mapDispatchToProps = {
  fetchSchedule
  , deleteSchedule
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ScheduleAll);