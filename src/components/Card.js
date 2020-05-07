import React from 'react';

const Card = ({name, userID, email, id,}) => {
  return (
    <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
      <img alt='users' src={`https://robohash.org/${id}`}/>
      <h2>{name}</h2>
      <h3>{userID}</h3>
      <p>{email}</p>
    </div>
    // it's not html it's jsx
  );
}

export default Card;
