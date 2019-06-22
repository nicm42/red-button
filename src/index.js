import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


class RedButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			hidden: true
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		//Show the message for a short time before hiding it again
		//And update instructions to include the word "again"
		this.setState({
			clicked: true,
			hidden: false
		})
		setTimeout(() => this.setState({
			hidden: true
		}), 2000);
	}

	render() {
		let instructions = "Press the red button.... if you dare"
		let instructionsAgain = "Press the red button again.... if you dare"
		let message = "Please do not press this button again";

	    return (
	    	<div className="app">
	    		<div className="instructions">{this.state.clicked ? instructionsAgain : instructions}</div>
	    		<button onClick={this.handleClick}>&nbsp;</button>
	    		<div className={this.state.hidden ? "message hidden" : "message visible"}>{message}</div>
	    	</div>
	    )
	}
}

ReactDOM.render(<RedButton />, document.getElementById('root'));