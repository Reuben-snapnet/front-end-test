import React, { useContext, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { EventContext } from "./EventProvider";
import Pagination from "./Pagination";
import Aos from "aos";
import "aos/dist/aos.css";

const Events = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { url } = useRouteMatch();
  const [currentEvents, loading] = useContext(EventContext);
  if (loading) {
    return <h2 className="text-center pt-10 font-bold text-3xl">Loading...</h2>;
  }

  return (
    <div className="mb-4 text-center">
      <h2 className="text-center py-10 font-semibold text-4xl">
        Events for Good
      </h2>
      {currentEvents.map((event) => {
        const { id, title, date, time } = event;
        return (
          <div className="flex justify-center" key={id} data-aos="zoom-in">
            <Link
              to={`${url}/${title}`}
              className="my-4 py-3 border rounded-md px-4 py-2 bg-white shadow cursor-pointer hover:shadow-xl"
            >
              <p>
                <span>{date},</span>
                <span className="pl-2">{time}</span>
              </p>
              <h2 className="font-semibold text-xl pt-2">{title}</h2>
            </Link>
          </div>
        );
      })}

      <div className="mt-5"></div>
      <Pagination />
    </div>
  );
};

export default Events;
