const React = require('react');
const NavBar = require('./Nav');

var App = React.createClass({
    render: function () {
        return (
            <div className='main container-fluid'>
                <NavBar />
            </div>
        );
    }
});

module.exports = App;