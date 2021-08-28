import React, { useContext } from 'react';
import { EventContext } from "./EventProvider";

const Pagination = () => {
    const [currentEvents, , postsPerPage, , paginate] = useContext(EventContext)
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(currentEvents.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log();

  return (
    <nav>
      <ul className=''>
        {pageNumbers.map(number => (
          <li key={number} className='border'>
            <a onClick={() => paginate(number)} href='!#' className=''>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
