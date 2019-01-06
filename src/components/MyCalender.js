import React from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { Container } from 'reactstrap';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ReactLoading from 'react-loading';
import { fetchProjects } from "../Redux/actions/projectActions"
const localizer = BigCalendar.momentLocalizer(moment)

const style = {
    height: "45em"
}


// const eventStyleGetter = (event, start, end, isSelected) => {

//     var backgroundColor = '#' + event.hexColor;
//     var style = {
//         backgroundColor: backgroundColor,
//         borderRadius: '0px',
//         opacity: 0.8,
//         color: 'black',
//         border: '0px',
//         display: 'block'
//     };
//     return {
//         style: style
//     };
// }


class MyCalendar extends React.Component {

    componentDidMount() {
        this.props.fetchProjects()

    }




    render() {

        const allProjectToCalendar = []
        const projectsArray = this.props.project.projects
        for (let i = 0; i < projectsArray.length; i++) {
            console.log(projectsArray[i])
            allProjectToCalendar.push({ start: projectsArray[i].start_date, end: projectsArray[i].end_date, title: projectsArray[i].projectName })
        }

        const myEventsList = allProjectToCalendar

        if (!allProjectToCalendar.length) {
            return (<ReactLoading type="spinningBubbles" color="red" height={'20%'} width={'20%'} />)


        } else {
            return (<Container>
                <br />
                <Link to={"/dashboard"} className=" btn btn-lg "><i className="fas fa-long-arrow-alt-left"></i>Dashboard </Link>
                <BigCalendar ClassName="h-50" style={style}
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    eventPropGetter={(this.eventStyleGetter)}

                /></Container>)
        }

    }


}

const mapStateToProps = state => ({
    project: state.project
});

const mapDispatchToProps = {

    fetchProjects
}

export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MyCalendar);
