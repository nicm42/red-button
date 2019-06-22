import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


class RedButton extends React.Component {
  HandleClick(){
  	alert("Please do not press this button again");
  }

  render() {
    return (
    	<div className="app">
    		<div className="instructions">Press the red button.... if you dare</div>
    		<button onClick={this.HandleClick}>&nbsp;</button>
    	</div>
    )
  }
}

ReactDOM.render(<RedButton />, document.getElementById('root'));