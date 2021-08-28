import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const EventLists = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(2);
  const [pageCount, setPageCount] = useState(0);

  const getEvents = async () => {
    const res = await axios.get(
      `http://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events`
    );
    localStorage.setItem("data", JSON.stringify(res?.data))
    const slice = res?.data.slice(offset, offset + perPage);
    const EventLists = slice.map((event) => (
      <div key={event.id}>
        <Link to={`/${event.id}`}><p>{event?.category}</p></Link>
        <p>{event?.date}</p>
      </div>
    ));
    setData(EventLists);
    setPageCount(Math.ceil(data.length / perPage));
  };

  console.log("data", pageCount);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getEvents();
  }, [offset]);

  return (
    <div className='App'>
      {data}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        // marginPagesDisplayed={2}
        // pageRangeDisplayed={5}
        onPageChange={(event) => handlePageClick(event)}
        // containerClassName={"pagination"}
        // subContainerClassName={"pages pagination"}
        // activeClassName={"active"}
      />
      {/* <ReactPaginate
              previousLabel={<ImArrowLeft />}
              nextLabel={<ImArrowRight />}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            /> */}
    </div>
  );
};

export default EventLists;
