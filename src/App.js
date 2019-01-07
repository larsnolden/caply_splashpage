import React, { Component } from 'react';
import { Global, css } from '@emotion/core';

import Splashpage from 'views/Splashpage';

//  inject fonts
const base = css(`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Source+Sans+Pro:300,400,600,700,900');
  html {
    min-height:100%;
    min-width: 100%;
    background: #FCFCFC;
  }

  body {
    min-height:100%;
    min-width: 100%;
  }
`);

class App extends Component {
  render() {
    return (
        <div>
          <Global styles={base} />
          <Splashpage />
        </div>
    );
  }
}

export default App;
