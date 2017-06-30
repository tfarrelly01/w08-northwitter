import React from 'react';
import NavBar from './NavBar';
import Image from './Image';
import ProfileCard from './ProfileCard';
import TweetForm from './TweetForm';
import TweetList from './TweetList';
import Trends from './Trends';


import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="component-App">
        <NavBar />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3'>

              <div className='component-ProfileCard'>
                <ProfileCard />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='component-TweetForm'>
                <TweetForm />
              </div>
              <div className='component-TweetList'>
                <TweetList />
              </div>             
            </div>
            <div className='col-md-3'>
              <div className='component-Trends'>
                <Trends />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;