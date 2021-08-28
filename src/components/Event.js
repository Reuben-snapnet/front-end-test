import React, { useState, useEffect } from "react";
import EventModal from "./EventModal";

const Event = (props) => {
	const {
		id,
		category,
		title,
		description,
		location,
		date,
		time,
		petsAllowed,
		organizer,
	} = props;

	const [isActive, setActive] = useState(false);
	const isModalActive = isActive ? "is-active" : "";

	useEffect(() => {
		document.onkeydown = function (e) {
			if (e.key === "Escape") {
				setActive(false);
			}
		};
	});

	return (
		<div className="event-item p-3 m-5" onClick={() => setActive(true)}>
			<h2 className="title is-size-4">{title}</h2>
			<p>{category}</p>
			<p className="is-italic">{date}</p>

			<EventModal
				isModalActive={isModalActive}
				setActive={setActive}
				key={id}
				id={id}
				title={title}
				category={category}
				date={date}
				description={description}
				location={location}
				time={time}
				petsAllowed={petsAllowed}
				organizer={organizer}
			/>
		</div>
	);
};

export default Event;
