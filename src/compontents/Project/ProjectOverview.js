import React from 'react';
import { Table, Container } from 'reactstrap';
import { connect } from 'react-redux';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { fetchAllProjectTasks } from "../../Redux/actions/backlogActions"

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
        </tr>
      );
    });
  }
  render() {



    // const tasks = this.props.backlog.project_tasks.map(project_task => (
    //   <ProjectTask key={project_task.id} task={project_task} project_ID={this.props.project_ID} />
    // ));


    // let todoTasks = [];
    // let doingTasks = [];
    // let doneTasks = [];
    // for (let i = 0; i < tasks.length; i++) {
    //   if (tasks[i].props.task.status === "TODO") {
    //     todoTasks.push(tasks[i]);
    //   }

    //   if (tasks[i].props.task.status === "DOING") {
    //     doingTasks.push(tasks[i]);
    //   }

    //   if (tasks[i].props.task.status === "DONE") {
    //     doneTasks.push(tasks[i]);
    //   }
    // }

    if (!this.props.tasks) {
      return (<div>Loading All tasks</div>)
    } else {

      let donetask = this.props.tasks.filter(task => task.status === "DONE")
      console.log('done', donetask)
      let doneDate = []

      for (let i = 0; i < donetask.length; i++) {
        // console.log(donetask[i])
        doneDate.push({ "date": donetask[i].dueDate })
      }
      console.log(doneDate)
      return (

        <Container>
          {/* <p>{doneDate}</p> */}

          <CalendarHeatmap
            startDate={new Date('2019-01-01')}
            endDate={new Date('2019-12-01')}
            values={[
              { date: '2019-01-01' },
              { date: '2019-01-22' },
              { date: '2019-01-30' }

            ]}
          />
          <p>$</p>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Project ID</th>
                <th>Task Name</th>
                <th>Note </th>
                <th>Status</th>
                <th>Due Date</th>
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
  fetchAllProjectTasks
}

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectOverview);