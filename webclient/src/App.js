import React, { Component } from 'react';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './App.css';
import FormWelcome from './FormView_Welcome/FormWelcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormWelcome className="formWelcomeComp" />
      </div>
    );
  }
}

export default App;
