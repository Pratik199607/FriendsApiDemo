import React from "react";
import Card from "./Card";
import "./CardList.css";
const CardList = ({ robots }) => {
	return (
		<div className="cardList__container">
			{robots.map((user, i) => {
				return (
					<Card
						key={i}
						name={robots[i].name}
						username={robots[i].username}
						email={robots[i].email}
					/>
				);
			})}
		</div>
	);
};
export default CardList;
