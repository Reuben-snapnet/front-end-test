import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEvents } from "../redux/action/event";

const Event = () => {
  const event = useSelector((state) => state.event);
  const [events, setEvents] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const { id } = useParams();
  const matchedEvent =
    event &&
    event.filter((event) => {
      event.id == id && setEvents(event);
    });

  console.log("matchedEvent", event, matchedEvent);

  return (
    <React.Fragment>
      <div className='App'>
        <p>{matchedEvent.category}</p>
        <p>{matchedEvent.date}</p>
        <p>{matchedEvent.description}</p>
        <p>{matchedEvent.location}</p>
        <p>{matchedEvent.organizer}</p>
        {/* <p></p>matchedEvent.petsAllowed: true
<p></p>matchedEvent.time: "12:00"
<p></p>matchedEvent.title: "Cat Adoption Day" */}
      </div>
    </React.Fragment>
  );
};

export default Event;
