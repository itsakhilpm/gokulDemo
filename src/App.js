import React from 'react';
import logo from './logo.svg';
import './App.css';
import { callUserApi } from './actions/user'; //import the call for api

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { locationName: '', fetchLocation: '' };
	}
	handleInputChange = (e) => {
		let { locationName } = this.state;
		locationName = e.target.value;
		//setting the new state value to the component states
		this.setState({
			...this.state,
			locationName,
		});
	};
	handleClick = () => {
		let { locationName, fetchLocation } = this.state;
		callUserApi()
			.then((result) => {
				console.log(result, 'in component', result.data.title);
				fetchLocation = result.data.title;
				this.setState({ ...this.state, fetchLocation });
			})
			.catch((error) => {
				console.log('error in api', error);
			});
	};
	render() {
		const { locationName, fetchLocation } = this.state;
		console.log(locationName);
		return (
			<>
				<input
					type="text"
					name="textLocation"
					onChange={this.handleInputChange}
				></input>
				<input
					type="button"
					name="btnFetchWeather"
					value="submit"
					onClick={this.handleClick}
				></input>
				<input
					type="text"
					name="fetchLocation"
					value={fetchLocation}
				></input>
			</>
		);
	}
}

export default App;
