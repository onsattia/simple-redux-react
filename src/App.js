import React from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          Counter: <span>{this.props.counter}</span>
        </div>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
        <hr/>
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
        <ul>
          {this.props.results.map(res => (
            <li key={res.id} onClick={this.props.onRetreiveResult}>{res.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
    results: state.results.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({type: 'INCREMENT', value: 1}),
    onDecrement: () => dispatch({type: 'DECREMENT', value: 1}),
    onStoreResult: (res) => dispatch({type: 'STORE_RESULT', result: res}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
