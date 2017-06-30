import Twit from 'twit';

var T = new Twit ({
    consumer_key: '...',
    consumer_secret: '...',
    access_token: '...',
    Access_token_secret: '...',
    timeout_ms: 60 * 1000 // Optiomnal HTTP request timeout to apply to all requests
});

function getTrends(cb) {
    T.get('trends/place', {id: 1}, cb);
}

export default getTrends;

// twitter apis REST API documentation
// GET trends /available closest or place

// apps.twitter.com
// create new app northwitter
//  desc
//  website Northcoders

// then get facebook website credentials
// put into .gitignore file

//https://www.npmjs.com/package/twit