import React from 'react';
import './TweetList.css';

class TweetList extends React.Component {
    render() {
        return (
            <div className="panel">
                <div className="panel-body">
                    <div className='component-TweetList'>TweetList
                        <div className='component-Tweet'>Tweet</div>
                        <div className='component-Tweet'>Tweet</div>
                        <div className='component-Tweet'>Tweet</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TweetList;