import React from 'react';

class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello React !</div>
    );
  }
}

export default App;
