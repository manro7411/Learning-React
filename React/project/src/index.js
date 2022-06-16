import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hellocomponent';

//class components

class Hellocomponentss extends React.Component {
  render() {
    return <h1>Hello  first components</h1>
  }
}

//create components
function Hellocomponents() {
  return <h1>Ratchanon Traitiprat</h1>
}
ReactDOM.createRoot(<Hellocomponentss />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
