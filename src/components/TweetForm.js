import React from 'react';
import './TweetForm.css';

class TweetForm extends React.Component {
    render() {
        return (
            <form>
                <textarea className="form-control" id="tweet">What's happening?</textarea>
            </form>
        );
    }
}

export default TweetForm;