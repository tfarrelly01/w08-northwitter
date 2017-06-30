import React from 'react';
import './TweetForm.css';

class TweetForm extends React.Component {
    render() {
        return (
            <form>
                <textarea className="form-control" id="tweet">What's happening?</textarea>
                <button type="button" className="btn btn-info btn-sm pull-right">Tweet</button>
            </form>
        );
    }
}

export default TweetForm;