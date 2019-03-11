import React, {Component} from 'react';
import Hello from "./hello";

class Unmount extends Component {
  state = {
    mount: true
  }

  render() {
    return <div ref='root'>
      <button onClick={() => this.setState({mount: false})}>Unmount 'Hello' Component</button>
      {
        this.state.mount
          ? <Hello/>
          : null
      }
    </div>;
  }

}

export default Unmount;
