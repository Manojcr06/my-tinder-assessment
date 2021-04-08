import React from 'react';
import LikedPerson from './LikedPerson';

const Lonely = ({ activeUserImage, likedUsers, superLikedUsers }) => (
  <div id="lonely">
    <p>There's no new around you.</p>

    <span className="pulse">
      <img src={`/images/users/${activeUserImage}`} alt="You..." />
    </span>

    <div id="liked-people">
      <p>
       People Who Liked You!!! = {likedUsers.length}
      </p>

      {likedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}

      <p>
        People Who Disliked You!!! = {superLikedUsers.length}
      </p>

      {superLikedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}
    </div>
  </div>
);

export default Lonely;