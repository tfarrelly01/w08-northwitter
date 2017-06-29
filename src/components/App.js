import React from 'react';
import NavBar from './NavBar';
import Image from './Image';
import ProfileCard from './ProfileCard';
import './App.css';
import TweetForm from './TweetForm';

class App extends React.Component {
  render() {
    return (
      <div className="component-App">
        <NavBar />
        <div className='container-fluid'>
          <div className='row'>
            <div className='component-Image'>
              <Image />
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-3'>

              <div className='component-ProfileCard'>
                <ProfileCard />
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='component-TweetForm'><TweetForm /></div>
              <div className='component-TweetList'>TweetList</div>
              <div className='component-Tweet'>Tweet</div>
              <div className='component-Tweet'>Tweet</div>
              <div className='component-Tweet'>Tweet</div>

            </div>
            <div className='col-sm-3'>
              <div className='component-Trends'>Trends</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;