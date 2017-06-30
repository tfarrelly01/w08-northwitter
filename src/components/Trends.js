import React from 'react';
import request from 'axios';

import Trend from './Trend';
import './Trends.css';

const API_URL = 'https://northwitter-api-jinwmdmaba.now.sh';

class Trends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trends: []
        };
        console.log('Constructing Component!');    
    }

    componentDidMount() {
        console.log('********** Sending HTTP request');  
        request.get(`${API_URL}/trends`)
            .then((res) => {
                this.setState({
                    trends: res.data.trends
                });
            })
            .catch(console.log);
    }
    render() {
        console.log('Rendering Component');
        console.log('Trends: ', this.state.trends.length);
        return (
            <div className="component-Trends">
                <div className="panel">
                    <div className="panel-body">
                        <h3 className="panel-title">
                            Trends
                        </h3>
                        {
                            this.state.trends.length === 0 ?
                            <p>Loading...</p> :
                            this.state.trends.slice(0, 10).map((trend) => (
                                <Trend 
                                name={trend.name} 
                                tweet_volume={trend.tweet_volume}
                                url={trend.url}  
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

// install axios https://www.npmjs.com/package/axios
// https://protected-oasis-31937.herokuapp.com
// READ allows you to make HTTP requests - GET, PUT, POST etc

export default Trends;