import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class QuestionOne extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	handleOnClick = () => {
		this.setState((prevState) => ({
			counter: prevState.counter + 1
		}));
	}

	render() {
		return (
			<div style={{ marginTop: 48 }}>
				<Button variant="contained" onClick={this.handleOnClick}  >
					I've been clicked: {this.state.counter} times
				</Button>
			</div>
		)
	}
}

export default QuestionOne;