import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class RedButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			hidden: true,
			count: 0,
			fontSize: "0.5em",
			disabled: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		//Show the message for a short time before hiding it again
		//And update instructions to include the word "again"
		this.setState({
			clicked: true,
			hidden: false,
			count: this.state.count + 1,
			disabled: true
		})
		setTimeout(() => this.setState({
			hidden: true,
			disabled: false
		}), 2000);
		//And increase the size of the message
		//But the font size includes the unit, so we need to extract just the number
		//and use that to set the new state
		let newFont = Number(this.state.fontSize.match(/(\d)[.]?/g).join("")) + 0.5 + "em";
		this.setState({
			fontSize: newFont
		})
	}

	render() {
		let instructions = "Press the red button.... if you dare"
		let instructionsAgain = "Press the red button again.... if you dare"
		let message = "Please do not press this button again";

	    return (
	    	<div className="app">
	    		<div className={this.state.hidden ? "instructions visible" : "instructions hidden"}>{this.state.clicked ? instructionsAgain : instructions}</div>
	    		<button disabled={this.state.disabled} onClick={this.handleClick}>&nbsp;</button>
	    		<div className={this.state.hidden ? "message hidden" : "message visible"} style={{ fontSize: this.state.fontSize }}>{message}</div>
	    	</div>
	    )
	}
}

ReactDOM.render(<RedButton />, document.getElementById('root'));