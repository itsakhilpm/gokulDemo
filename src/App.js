import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import RegForm from './RegForm';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					{/* <Route exact path='/public' component={Public}/>
        <Route path="/protected" component={Protected} /> */}

					<Route exact path="/" component={RegForm} />
					<Route exact path="/success" component={Success} />
					{/* <PrivateRoute exact path="/test-gfx" component = {TestGfx}  /> */}
				</Switch>
			</Router>
		);
	}
}

function Success() {
	return <h3>Success</h3>;
}
export default App;
