import React from 'react';
import { Button, Container, Col, Row, Form, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { callUserApi } from './actions/user'; //import the call for api
import { connect } from 'react-redux';
import _isEqual from 'lodash/isEqual';

class RegForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locationName: '',
			fetchLocation: '',
			tempin_C: '',
			feelsLike_C: '',
			errorInForm: false,
			formAttributes: {
				emaiId: '',
				firstName: '',
				lastName: '',
				password: '',
				confirmPassword: '',
			},
			userCreated: false,
			validity: {
				isFirstNameValid: true,
				isPasswordsame: true,
			},
		};
	}
	componentDidUpdate(prevProps) {
        if(!_isEqual(this.props, prevProps)){
        }
    }

	handleInputChange = (e) => {
		let {
			locationName,
			errorInForm,
			formAttributes,
			validity,
		} = this.state;
		let {
			target: { value, name },
		} = e;
		formAttributes[name] = value;
		if (name === 'firstName') {
			if (value.length > 10) {
				validity.isFirstNameValid = false;
			} else validity.isFirstNameValid = true;
		}
		if (name === 'confirmPassword') {
			if (value !== formAttributes.password) {
				validity.isPasswordsame = false;
			} else validity.isPasswordsame = true;
		}
		this.setState({
			...this.state,
			formAttributes,
			validity,
		});

		//setting the new state value to the component states
		// if (e.target.value.length > 10) {
		// 	errorInForm = true;
		// } else {
		// 	locationName = e.target.value;
		// }
		// this.setState({
		// 	...this.state,
		// 	locationName,
		// 	errorInForm,
		// });
	};
	handleClick = () => {
		// let { locationName, fetchLocation, feelsLike_C, tempin_C } = this.state;
		let { dispatch } = this.props;
		callUserApi(dispatch);
		// .then((result) => {
		// 	this.setState({ userCreated: true });

		// 	// console.log('the location', locationName);
		// 	// console.log('Result', result);
		// 	// console.log('the temperature in C', result.data.current.temp_c);
		// 	// console.log(
		// 	// 	'the feelslike_c in C',
		// 	// 	result.data.current.feelslike_c
		// 	// );
		// 	//console.log(result, 'in component', result.data.title);
		// 	// fetchLocation = result.data.title;
		// 	// this.setState({
		// 	// 	...this.state,
		// 	// 	tempin_C: result.data.current.temp_c,
		// 	// 	feelsLike_C: result.data.current.feelslike_c,
		// 	// });
		// })
		// .catch((error) => {
		// 	this.setState({
		// 		...this.state,
		// 		tempin_C: '',
		// 		feelsLike_C: '',
		// 	});
		// 	console.log('error in api', error);
		// });
	};
	render() {
		const {
			errorInForm,
			locationName,
			fetchLocation,
			feelsLike_C,
			tempin_C,
			formAttributes,
			validity,
			userCreated,
		} = this.state;
		if (userCreated) {
			return (
				<Redirect
					to={{
						pathname: '/success',
					}}
				/>
			);
		}
		console.log(this.props.userDetails);
		return (
			<React.Fragment>
				<Container>
					<Row>
						<Col md={{ span: 3, offset: 3 }}>
							<Alert
								show={userCreated}
								variant="success"
								onClose={() =>
									this.setState({ userCreated: false })
								}
								dismissible
							>
								<Alert.Heading>Success</Alert.Heading>
								<p>User successfully created</p>
							</Alert>
							<h3>Registration form</h3>
							<Form autoComplete="off">
								<Form.Group>
									<Form.Label>Email</Form.Label>
									<Form.Control
										autoComplete="off"
										type="email"
										name="emaiId"
										onChange={this.handleInputChange}
									/>
									<Form.Label>FirstName</Form.Label>
									<Form.Control
										type="text"
										name="firstName"
										onChange={this.handleInputChange}
									/>
									{!validity.isFirstNameValid && (
										<Form.Label>
											FirstName should be less than 10
										</Form.Label>
									)}

									<Form.Label>LastName</Form.Label>
									<Form.Control
										type="text"
										name="lastName"
										onChange={this.handleInputChange}
									/>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										name="password"
										onChange={this.handleInputChange}
									/>
									<Form.Label>Confirm password</Form.Label>
									<Form.Control
										type="password"
										name="confirmPassword"
										onChange={this.handleInputChange}
									/>
									{!validity.isPasswordsame && (
										<Form.Label>
											Password and confirm password is not
											same
										</Form.Label>
									)}
								</Form.Group>
								<Button
									variant="outline-primary"
									size="lg"
									onClick={this.handleClick}
								>
									Submit
								</Button>
							</Form>

							{/* {errorInForm && (
							<span>
								Location name must be less than 10 characters
							</span>
						)}


						{!!tempin_C && !errorInForm && (
							<table>
								<tr>
									<th>locationName</th>
									<th>tempin_C</th>
									<th>feelsLike_C</th>
								</tr>
								<tr>
									<td>{locationName}</td>
									<td>{tempin_C}</td>
									<td>{feelsLike_C}</td>
								</tr>
							</table>
						)} */}
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}
function mapStateToProps(state) {
	return {
		userDetails: state.user.userDetails,
	};
}
export default connect(mapStateToProps)(RegForm);
