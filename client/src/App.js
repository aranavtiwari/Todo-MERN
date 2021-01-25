import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './component/todo';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Provider store={store}>
        <Todo/>
      </Provider>
     );
  }
}
 
export default App;