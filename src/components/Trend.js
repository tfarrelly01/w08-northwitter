import React from 'react';

const Trend = (props) => (
    <div className=".component-Trends">
        <a href={props.url}>{props.name}</a>
        <p>{props.tweet_volume}</p>
    </div>
);

export default Trend;