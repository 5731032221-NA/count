import React from 'react';
import { connect } from 'react-redux';


class Counter extends React.Component {

  count = () => {
    this.props.dispatch({ type: 'Count' });
  }



  reset = () => {
    this.props.dispatch({ type: 'Reset' });
  }



  render() {
    const cc = {
        color: '#006600',
        };

    return (

        <div>
           <h1>   &emsp;&ensp;  <span style={cc}>{this.props.count}</span></h1><br></br>
          <button onClick={this.count}>Count</button>
            <a>  &emsp;  </a>
          <button onClick={this.reset}>Reset</button>
        </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    count: state.count
  };

}

export default connect(mapStateToProps)(Counter);