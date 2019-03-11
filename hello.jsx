import React, {Component} from 'react';

class Hello extends Component {
  state = {
    count: 0
  }

  render() {
    return <div ref='root'>
      <h1>Count: {this.state.count}</h1>
      <button onClick={() => this.setState({count: this.state.count + 1})}>Increase</button>
    </div>;
  }

  componentDidMount() {
    console.log("> componentDidMount")
  }

  componentWillUnmount() {
    console.log("> componentWillUnmount")
  }
}

export default Hello;
