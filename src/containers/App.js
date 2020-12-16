import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: "",
		};
	}
	onSearch = (event) => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const { robots, searchfield } = this.state;
		const searchFriend = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return (
			<div className="tc">
				<h1 className="f1">FriendsAPI</h1>
				<SearchBox searchChange={this.onSearch} />
				<Scroll>
					<CardList robots={searchFriend} />
				</Scroll>
			</div>
		);
	}
}

export default App;
