import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


class RedButton extends React.Component {
  render() {
    return <button>&nbsp;</button>;
  }
}

ReactDOM.render(<RedButton />, document.getElementById('root'));