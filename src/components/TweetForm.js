import React from 'react';

class TweetForm extends React.Component {
    render() {
        return (
            <form>
                <label for="tweet">Send a new tweet:</label>
                <textarea className="form-control" id="tweet"></textarea>
            </form>
        );
    }
}

export default TweetForm;