import React, { useContext } from "react";
import { EventContext } from "./EventProvider";

const Pagination = () => {
  const [currentEvents, , postsPerPage, paginate, setCurrentPage] = useContext(
    EventContext
  );
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(currentEvents.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(paginate);

  return (
    <div className="flex justify-center">
      <ul className="flex">
        <li
          onClick={() => setCurrentPage(1)}
          className="py-2 px-3 cursor-pointer border-2 border-gray-500"
        >
          1
        </li>
        <li
          onClick={() => setCurrentPage(2)}
          className="py-2 px-3 cursor-pointer border-2 border-gray-500 mx-2"
        >
          2
        </li>
        <li
          onClick={() => setCurrentPage(3)}
          className="py-2 px-3 cursor-pointer border-2 border-gray-500"
        >
          3
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
