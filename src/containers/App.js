import React, { Component } from "react";
import CardList from "../components/CardList";
// import { robots } from "../robots";
import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { setSearchField, requestRobots } from "../action";
import "./App.css";
// import { requestRobots } from "../reducers";

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onSearch: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
	};
};
class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}
	render() {
		const { searchField, onSearch, robots, isPending } = this.props;
		const searchFriend = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPending ? (
			<h1>Loading...</h1>
		) : (
			<div className="container ">
				<h1 className="customtext">FriendsAPI</h1>
				<SearchBox searchChange={onSearch} />
				<Scroll>
					<CardList robots={searchFriend} />
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
