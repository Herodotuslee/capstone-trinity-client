import React from 'react';
import { Table, Container } from 'reactstrap';
import { connect } from 'react-redux';
import moment from "moment";
import { Link } from 'react-router-dom';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

import { fetchAllProjectTasks, deleteProjectTaskByID } from "../../Redux/actions/backlogActions"

class ProjectOverview extends React.Component {

  componentDidMount() {
    this.props.fetchAllProjectTasks()
  }


  renderList() {
    console.log('task', this.props.tasks)
    return this.props.tasks.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.projectIdentifier}</td>
          <td>{item.name}</td>
          <td>{item.note}</td>
          <td>{item.status}</td>
          <td>{item.dueDate}</td>


          <td> <i className="fas fa-times" onClick={() => this.props.deleteProjectTaskByID(item.id)} />
          </td>
        </tr>

      );
    });
  }
  render() {

    if (!this.props.tasks) {
      return (<div>Loading All tasks</div>)
    } else {

      let donetask = this.props.tasks.filter(task => task.status === "DONE")
      console.log('done-Task', donetask)
      let doneDate = []

      for (let i = 0; i < donetask.length; i++) {

        doneDate.push({ "date": donetask[i].dueDate, 'count': 1 })
      }
      return (
        <Container>
          <br />
          <Link to={"/dashboard"} className=" btn btn-lg "><i className="fas fa-long-arrow-alt-left"></i>Dashboard </Link>
          <br />
          <CalendarHeatmap
            startDate={moment(new Date()).subtract(1, 'years')}
            endDate={new Date(Date.now())}
            values={doneDate}
          />
          <br />
          <br />

          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Project ID</th>
                <th>Task Name</th>
                <th>Note </th>
                <th>Status</th>
                <th>Due Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </Table>
        </Container>
      );

    }

  }
}

const mapStateToProps = state => ({


  tasks: state.backlog.project_tasks

});

const mapDispatchToProps = {
  fetchAllProjectTasks,
  deleteProjectTaskByID
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectOverview);