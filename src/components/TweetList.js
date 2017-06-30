import React from 'react';
import Tweet from './Tweet';
import request from 'axios';
import {flatten} from 'underscore';

import './TweetList.css';

const API_URL = 'https://northwitter-api-jinwmdmaba.now.sh';

class TweetList extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            tweets: [],
        };
        
    }
    componentDidMount() {
        request.get(`${API_URL}/tweets`)
            .then((res) => {
                const tweets = flatten(res.data.tweets);
                this.setState({tweets: tweets});
            });
    }
    render() {
        return (
            <div className="panel">
                <div className="panel-body">
                    <div className='component-TweetList'>
                        {
                          this.state.tweets.slice(0,10).map((tweet) => {
                              return (
                                <Tweet 
                                    text={tweet.text}
                                    created_at={tweet.created_at}
                                    name={tweet.user.name}
                                    screen_name={tweet.user.screen_name}
                                    profile_image_url={tweet.user.profile_image_url}
                                />
                              );
                          }) 
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default TweetList;