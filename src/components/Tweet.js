import React from 'react';
import './Tweet.css';

const Tweet = (props) => (
    <div className="component-Tweet">
        <p>{props.text}</p>
        <p>{props.created_at}</p>
        <p>{props.name}</p>
        <p>{props.screen_name}</p>
        <p>{props.profile_image_url}</p>
    </div>
);

export default Tweet;