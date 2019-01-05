import React, { Component } from 'react'

import BigCalendar from 'react-big-calendar'
import moment from 'moment'
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const myEventsList = [{
    start: new Date(),
    end: new Date(moment().add(1, "days")),
    title: "Some title"
}]
const MyCalendar = props => (


    <BigCalendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
    />
)

export default MyCalendar