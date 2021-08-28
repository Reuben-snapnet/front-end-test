import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "./EventProvider";

const EventDetail = () => {
  const [currentEvents] = useContext(EventContext);
  const { eventName } = useParams();
  const singleEvent = currentEvents.find((p) => p.title === eventName);
  let eventData;

  //   console.log(currentPosts);

  if (singleEvent) {
    const { title, time, date, description, location, organizer } = singleEvent;

    eventData = (
      <div className="flex justify-center text-left mt-10">
        <div>
          <h2 className="text-left py-7 font-semibold text-4xl">
            Single Event
          </h2>
          <h3>
            Date: <span className="pl-2 font-semibold">{date}</span>
          </h3>
          <h3>
            Time: <span className="pl-2 font-semibold">{time}</span>
          </h3>
          <h3>
            Location: <span className="pl-2 font-semibold">{location}</span>
          </h3>
          <h3>
            organize: <span className="pl-2 font-semibold">{organizer}</span>
          </h3>
          <h2>
            Event Title: <span className="pl-2 font-semibold">{title}</span>
          </h2>
          <p>
            Description:{" "}
            <span className="pl-2 font-semibold">{description}</span>
          </p>
        </div>
      </div>
    );
  } else {
    eventData = <h3 className="text-center pt-10">404</h3>;
  }

  return <div>{eventData}</div>;
};

export default EventDetail;
