import React from 'react';
import request from 'axios';
import {flatten} from 'underscore';

const API_URL = 'https://northwitter-api-jinwmdmaba.now.sh';
import './ProfileCard.css';

class ProfileCard extends React.Component {
  constructor (props) {
    super(props);
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
  render () {
    return (
        <div className="panel">
          <div className="panel-body">
            <div className="container-fluid">            
              <div className="row">
                <div className="col-xs-4">
                  <img className="logo_image"src="https://pbs.twimg.com/profile_images/668792792689344512/5P90PT8v_400x400.png" alt="northcoders logo" />
                </div>
                <div className="col-xs-8">
                  <h2>northcoders</h2>
                  <h3><a href="https://twitter.com/northcoders">@northcoders</a></h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4">
                  <h4 className="prof-text">Tweets</h4>
                  <h4 className="prof-num">963</h4>
                </div>
                <div className="col-xs-4">
                  <h4 className="prof-text">Following</h4>
                  <h4 className="prof-num">1023</h4>                 
                </div>
                <div className="col-xs-4">
                  <h4 className="prof-text">Followers</h4>
                  <h4 className="prof-num">1450</h4>                  
                </div>
              </div>
            </div>
            <h4 className="ProfileHeaderCard">
              The coding bootcamp for the North. Learn 
              to code in 12 weeks. Launch your coding 
              career. May SOLD OUT.
              <a href="https://t.co/qu7tkdtXt1"> Apply now for August 14th </a>
            </h4>
          </div>
        </div>
    );
  }
}

export default ProfileCard;