import React, { Component } from 'react'; // Imports everything needed from React
import './App.css'; // Imports css from App.css
import { Cardlist } from './components/cardlist/card-list.component';
import { SearchBox } from './components/search-box/serach-box.component';
class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}

	handleChange = e => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster => {
			return monster.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return (
			<div className="App">
				<h1>Monster Roledex</h1>
				<SearchBox
					placeholder="search monsters"
					handleChange={this.handleChange}
				/>
				<Cardlist monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
