import React from 'react';
import './ProfileCard.css';

class ProfileCard extends React.Component {
  render () {
    return (
        <div>
          <img className="logo_image"src="https://pbs.twimg.com/profile_images/668792792689344512/5P90PT8v_400x400.png" alt="northcoders logo" />
          <h1>northcoders</h1>
          <h3><a href ="https://twitter.com/northcoders">@northcoders</a></h3>
            <p className="ProfileHeaderCard">
            The coding bootcamp for the North. Learn 
            to code in 12 weeks. Launch your coding 
            career. May SOLD OUT.
            <a href="https://t.co/qu7tkdtXt1"> Apply now for August 14th </a></p>
        </div>
    );
  }
}

export default ProfileCard;