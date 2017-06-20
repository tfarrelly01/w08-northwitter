import React from 'react';
import NavBar from './NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="component-App">
        <NavBar />
        <div className='main container-fluid'>
          {/* Your components go here */}
        </div>
      </div>
    );
  }
}

export default App;