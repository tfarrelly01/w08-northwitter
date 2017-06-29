import React from 'react';
import './ProfileCard.css';

class ProfileCard extends React.Component {
  render () {
    return (
        <div>
            <p class="ProfileHeaderCard-bio u-dir" dir="ltr">
            The coding bootcamp for the North. Learn 
            to code in 12 weeks. Launch your coding 
            career. May SOLD OUT.
            <a href="https://t.co/qu7tkdtXt1"> Apply now for August 14th </a></p>
        </div>
    );
  }
}

export default ProfileCard;