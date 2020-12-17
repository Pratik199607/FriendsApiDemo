import React from "react";
import "./Card.css";
// import ReactDom from "react-dom";

const Card = ({ name, email, username }) => {
	return (
		<div className="card__container">
			<img src={`https://robohash.org/${name}?set=set5`} alt="alt text" />
			<div>
				<h2>{name}</h2>
				<h4>nickname: {username}</h4>
				<h4>mailID: {email}</h4>
			</div>
		</div>
	);
};

export default Card;
