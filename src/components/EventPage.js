import React from "react";

const EventPage = ({
	category,
	title,
	description,
	location,
	date,
	time,
	petsAllowed,
	organizer,
}) => {
	return (
		<>
			<div>{category}</div>
			<div>{title}</div>
			<div>{description}</div>
			<div>{location}</div>
			<div>{date}</div>
			<div>{time}</div>
		</>
	);
};

export default EventPage;
