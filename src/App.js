import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { render } from '@testing-library/react';

class calculatorApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numAttributes: {
				one: '',
				two: '',
				three: '',
				four: '',
				five: '',
				six: '',
				seven: '',
				eight: '',
				nine: '',
				Zero: '',
			},
			calcAttributes: { add: '', sub: '', mul: '', div: '' },
			resultString: '',
			isResult: false,
			operatorCheck: { isOperator: false },
		};
	}
	handleInputChange = (e) => {
		e.preventDefault();
		let {
			numAttributes,
			calcAttributes,
			resultString,
			isResult,
			operatorCheck,
		} = this.state;
		let {
			target: { value, name },
		} = e;

		//numAttributes[name]=value;
		console.log('clicked', name);

		if (name !== 'equals') {
			//console.log('value ', value);

			if (isResult || name === 'clear') {
				resultString = '';
				isResult = false;
			} else {
				resultString += value;
			}
			//resultString += value;
		} else {
			if (isNaN(resultString.charAt(resultString.length - 1))) {
				console.log(
					'is operator',
					resultString.charAt(resultString.length - 1)
				);
				operatorCheck.isOperator = true;
				console.log('operator or not ', operatorCheck.isOperator);
			} else {
				Number(resultString);
				console.log('final result', eval(resultString));
				resultString = eval(resultString);
				isResult = true;
				operatorCheck.isOperator = false;
			}
		}
		this.setState({ resultString, isResult, operatorCheck });

		console.log('result ', resultString);
	};
	render() {
		const { operatorCheck } = this.state;

		return (
			<React.Fragment>
				<Container>
					<Row>
						<Col md={{ span: 3, offset: 3 }}>
							<h5>Calculator</h5>
							<Form>
								<Form.Group>
									<Form.Label> </Form.Label>
									<Form.Control
										type="text"
										Placeholder="Enter the values"
										value={this.state.resultString}
									/>
									<br />
									{operatorCheck.isOperator && (
										<Form.Label>
											Please enter the numbers in proper
											format
										</Form.Label>
									)}

									<Form.Row>
										<Button
											name="one"
											size="lg"
											value={1}
											variant="light"
											onClick={this.handleInputChange}
										>
											1
										</Button>

										<Button
											name="two"
											size="lg"
											value={2}
											variant="light"
											onClick={this.handleInputChange}
										>
											2
										</Button>

										<Button
											name="three"
											value={3}
											size="lg"
											variant="light"
											onClick={this.handleInputChange}
										>
											3
										</Button>
										<Button
											name="add"
											size="lg"
											value={'+'}
											variant="light"
											onClick={this.handleInputChange}
										>
											+
										</Button>
										<Button
											name="clear"
											size="lg"
											value={'CE'}
											variant="light"
											onClick={this.handleInputChange}
										>
											CE
										</Button>
									</Form.Row>
									<Form.Row>
										<Button
											name="four"
											value={4}
											size="lg"
											variant="light"
											onClick={this.handleInputChange}
										>
											4
										</Button>

										<Button
											name="five"
											value={5}
											size="lg"
											variant="light"
											onClick={this.handleInputChange}
										>
											5
										</Button>

										<Button
											name="six"
											value={6}
											size="lg"
											variant="light"
											onClick={this.handleInputChange}
										>
											6
										</Button>
										<Button
											name="sub"
											value="-"
											size="lg"
											variant="light"
											onClick={this.handleInputChange}
										>
											-
										</Button>
									</Form.Row>
									<Form.Row>
										<Button
											name="seven"
											size="lg"
											value={7}
											variant="light"
											onClick={this.handleInputChange}
										>
											7
										</Button>

										<Button
											name="eight"
											size="lg"
											value={8}
											variant="light"
											onClick={this.handleInputChange}
										>
											8
										</Button>

										<Button
											name="nine"
											size="lg"
											value={9}
											variant="light"
											onClick={this.handleInputChange}
										>
											9
										</Button>
										<Button
											name="mul"
											size="lg"
											variant="light"
											value={'*'}
											onClick={this.handleInputChange}
										>
											*
										</Button>
									</Form.Row>
									<Form.Row>
										<Button
											name="decimal"
											size="lg"
											variant="light"
											onClick={this.handleInputChange}
											value={'.'}
										>
											.
										</Button>

										<Button
											name="zero"
											size="lg"
											variant="light"
											onClick={this.handleInputChange}
											value={'0'}
										>
											0
										</Button>

										<Button
											name="equals"
											size="lg"
											variant="light"
											onClick={this.handleInputChange}
											value="="
										>
											=
										</Button>
										<Button
											name="div"
											size="lg"
											variant="light"
											onClick={this.handleInputChange}
											value="/"
										>
											/
										</Button>
									</Form.Row>
								</Form.Group>
							</Form>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

export default calculatorApp;
