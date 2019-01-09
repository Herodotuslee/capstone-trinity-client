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
import { fetchExpense } from "../Redux/actions/expenseActions"


const localizer = BigCalendar.momentLocalizer(moment)

const style = {
    height: "45em"
}



class MyCalendar extends React.Component {

    eventStyleGetter = (event, start, end, isSelected) => {

        let color
        if (event.title == 'Rent') {
            color = '#FFA1B5'
        } else if (event.title === 'Bill') {
            color = '#FFE199'
        } else {
            color = '#86C7F3'
        }

        var style = {
            backgroundColor: color,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block'
        };



        return {
            style: style
        };
    }

    componentDidMount() {
        this.props.fetchProjects()
        this.props.fetchExpense()

    }

    render() {

        const allProjectToCalendar = []
        const projectsArray = this.props.project.projects
        const exensesArray = this.props.expense

        for (let i = 0; i < projectsArray.length; i++) {

            allProjectToCalendar.push({
                start: moment(projectsArray[i].start_date).utcOffset('+0700').format("YYYY-MM-DD")
                , end: moment(projectsArray[i].end_date).utcOffset('+0700').format("YYYY-MM-DD")
                , title: projectsArray[i].projectName
            })
        }
        for (let i = 0; i < exensesArray.length; i++) {
            let category;
            if (exensesArray[i].category_id === 1) {
                category = "Rent"
            }
            if (exensesArray[i].category_id === 4) {
                category = "Bill"
            }
            allProjectToCalendar.push({ start: exensesArray[i].date, end: exensesArray[i].date, title: category })
        }



        const myEventsList = allProjectToCalendar

        if (!allProjectToCalendar.length) {
            return (<ReactLoading type="spinningBubbles" color="red" height={'20%'} width={'20%'} />)


        } else {
            console.log("allProjectToCalendar", this.props.expense)
            return (<Container>
                <br />
                <Link to={"/dashboard"} className=" btn btn-lg "><i className="fas fa-long-arrow-alt-left"></i>Dashboard </Link>
                <BigCalendar ClassName="h-50" style={style}
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    eventPropGetter={(this.eventStyleGetter)}
                    views={['month']}
                /></Container>)
        }

    }


}

const mapStateToProps = state => ({
    project: state.project,
    expense: state.expense.filter(expense => {
        return (expense.category_id === 1 || expense.category_id === 4);
    })
});

const mapDispatchToProps = {

    fetchProjects
    , fetchExpense
}


export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MyCalendar);
