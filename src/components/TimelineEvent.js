import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return (
    <section className="timeline-event">
      <p className="event-person">{props.person}</p>
      <p className="event-time"><Timestamp time={props.timestamp}/></p>
      <p className="event-status">{props.status}</p>
      {/* <p>This event on <Timestamp time={props.timestamp}/>: {props.person} -- {props.status}</p> */}
    </section>
  )
}

export default TimelineEvent;