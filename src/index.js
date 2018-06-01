import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



const initialState = {
  count: 0
};



function reducer(state = initialState, action) {

  switch(action.type) {
    case 'Count':
      return {
        count: state.count + 1
      };
    case 'Reset':
      return {
        count: 0
      };
    default:
      return state;
  }

}



const store = createStore(reducer);


class NameForm extends React.Component {

  render() {

    return (
        <Provider store={store}>
        <Counter/>
        </Provider>
    );
  }
}



ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
