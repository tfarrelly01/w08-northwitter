# Northwitter


## Objectives

1. Learn how to integrate HTTP requests and fetched data into your React UI.
2. Learn about advanced React functionality such as Component lifcycle methods.
3. Put your functional programming into use as you will need to manipulate the data served up. Our API serves up the data exactly the same as Twitter does.
4. Practice your CSS skills by cloning the Twitter's homepage styling which will be an awesome show piece for your portfolio!


## Requirements

1. Implement the Home view of Twitter by following the [React Checklist](). We recommend doing the whole process with a single component (Trends would be a good one to start) to get the hang of it.
2. Use [Bootstrap](http://getbootstrap.com/) for styling (you may add your own custom styles too). It might be a good idea to do some styling early to position all the components in the page, but most of the styling should be done after the logic is implemented.
3. The application should fetch data from the provided API.
4. The app should have 3 main data-driven components:
  1. User Profile
  2. Trends list
  3. Tweets timeline
5. Tweets should feature the users avatar.

## Advanced Requirements
- For each tweet render any attached data such as images. Handles (@username) and hashtags (#Hashtag) should be displayed as links and should link to the actual pages on real Twitter. You may use the logic you implemented on the Twitter Data kata from a while ago :)
- The form form submitting tweets should validate tweets' length and show any characters after 140 in red (copy functionality from Twitter).
- Make your app send a twee by posting it to the dummy API POST endpoint (it won't go anywhere, but it will reply with a success status code).
- Make your app respond properly to a failed POST request. A separate dummy endpoint is provided on the API.
- Add extra functionality such as modals for direct messages.
- Play with Bootsrap and try to get as close to the real styling as possible.

## API documentation

Domain: `https://protected-oasis-31937.herokuapp.com`

### GET routes

#### Status
`/`
Responds with the status of the API.

#### Handles
`/handles`
Responds with an array of the available handles.

#### Trends
`/trends`
Responds with an array of the current trends.

#### Tweets
`/tweets`
Responds with tweets for all available handles.

#### Individual handle's tweets
`/tweets/:handle`
Responds with the tweets for the specified handle.

#### Individual handle's followers
`/followers/:handle`
Responds with the followers for the specified handle.

#### Individual handle's following
`/following/:handle`
Responds with the handles the specified handle is following.

### POST routes

#### Success
`/serve-ok`
Dummy POST endpoint that responds with a 200 code.

#### Error
`/serve-error`
Dummy POST endpoint that responds with a 500 code.

## Resources

[Bootstrap Documentation](http://getbootstrap.com/css/)

[Difference between GET and POST requests](https://www.youtube.com/watch?v=UObINRj2EGY)

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

[React Component Lifecycle Methods](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle)

[Collection of Frontend Resources on Wakelet](http://wke.lt/w/s/lH3kv)
