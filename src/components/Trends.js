import React from 'react';
// import request from 'axios'; 
// import getTrends from './data/getTrends';

// const API_URL = 'https://protected-oasis-31937.herokuapp.com';

class Trends extends React.Component {
  render () {
    /*
    request.get(`${API_URL}/trends`)
        .then(res => {
            console.log(res.data);
        })
        .catch(console.log);
    */

    return (
        <div className="component-Trends">
            <div className="panel">
                <div className="panel-body">
                    <h3 className="panel-title">
                        Trends
                    </h3> 
                    <Trend title='Something' tweetCount="3.4K Tweets" />
                    <Trend title='Something' tweetCount="3.4K Tweets" />
                    <Trend title='Something' tweetCount="3.4K Tweets" />
                    <Trend title='Something' tweetCount="3.4K Tweets" />
                    <Trend title='Something' tweetCount="3.4K Tweets" />                
                </div>     
            </div> 
        </div>
    );
  }
}

// install axios https://www.npmjs.com/package/axios
// https://protected-oasis-31937.herokuapp.com
// READ allows you to make HTTP requests - GET, PUT, POST etc

// use npm twit INSTEAD

const Trend = (props) => (
    <div className=".component-Trend">
        <a href={props.url}>{props.title}</a>
        <p>{props.tweetCount}</p>
    </div>
);

export default Trends;