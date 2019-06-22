import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


class RedButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: 0,
			hidden: true
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		/*this.setState({
			clicked: clicked++
		})*/
		this.setState({
			hidden: false
		})
	}

	render() {
		let instructions = "Press the red button.... if you dare"
		let message = "Please do not press this button again";

	    return (
	    	<div className="app">
	    		<div className="instructions">{instructions}</div>
	    		<button onClick={this.handleClick}>&nbsp;</button>
	    		<div className={this.state.hidden ? "message hidden" : "message visible"}>{message}</div>
	    	</div>
	    )
	}
}

ReactDOM.render(<RedButton />, document.getElementById('root'));