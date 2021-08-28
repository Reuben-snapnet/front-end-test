import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Event = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [event, setEvent] = useState("");
  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const res = await axios.get(
        `http://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events`
      );
      const info = res?.data
      //setAllEvents(info);
    } catch (error) {
      console.log(error);
    }
  };

  const { id } = useParams();
  const matchedEvent =
    allEvents &&
    allEvents.filter((event) => {
      event.id == id && setEvent(event);
    });

  console.log("matchedEvent", event, matchedEvent);

  return(
      <React.Fragment>
      <div className="App">
      {/* <p></p>matchedEvent.category: "animal welfare"
<p></p>matchedEvent.date: "January 28, 2022"
<p></p>matchedEvent.description: "Find your new feline friend at this event."
id: 123
<p></p>matchedEvent.location: "Meow Town"
<p></p>matchedEvent.organizer: "Kat Laydee"
<p></p>matchedEvent.petsAllowed: true
<p></p>matchedEvent.time: "12:00"
<p></p>matchedEvent.title: "Cat Adoption Day" */}
  </div>
  </React.Fragment>)
};

export default Event;
