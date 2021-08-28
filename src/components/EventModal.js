import React from "react";

const EventModal = (props) => {
	const {
		isModalActive,
		setActive,
		category,
		title,
		description,
		location,
		date,
		time,
		petsAllowed,
		organizer,
	} = props;
	return (
		<div className={`modal ${isModalActive}`}>
			<div className="modal-background" onClick={() => setActive(false)}></div>
			<div className="modal-card">
				<header className="event-popup-head modal-card-head">
					<p className="modal-card-title popup-title mb-0 is-size-6-mobile">
						Press Esc to close
					</p>
				</header>

				<section className="modal-card-body">
					<div className="container">
						<h1 className="title">{title}</h1>
						<h3 className="subtitle is-capitalized">{category}</h3>

						<hr />

						<div className="details has-text-left">
							<p className="event-desc is-italic p-2 is-size-4 is-centered">
								{description}
							</p>
							<p className="p-2">
								<strong>Date:</strong> {date}
							</p>

							<p className="p-2">
								<strong>Time:</strong>
								{time}
							</p>

							<p className="p-2">
								<strong>At:</strong>
								{location}
							</p>

							<p className="p-2">
								<strong>Organized by:</strong> {organizer}
							</p>

							<p className="p-2">
								{petsAllowed ? "Pets are allowed" : "No pets allowed"}
							</p>
						</div>
					</div>
				</section>

				<footer className="modal-card-foot">
					<button
						className="button close-popup"
						onClick={() => setActive(false)}
					>
						Close
					</button>
				</footer>
			</div>
		</div>
	);
};

export default EventModal;
