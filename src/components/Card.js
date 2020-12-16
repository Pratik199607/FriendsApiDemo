import React from "react";
// import ReactDom from "react-dom";

const Card = ({ name, email, username }) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${name}?set=set5`} alt="alt text" />
			<div>
				<h2>{name}</h2>
				<h4>{username}</h4>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
