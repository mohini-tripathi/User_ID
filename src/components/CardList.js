import React from 'react';
import Card from './Card';

 const CardList = ({ users }) => {
   return (
     <div>
     {
     users.map((users, i) => {
       return (
       <Card
       key={i}
       id={users[i].id}
       name={users[i].name}
       userID={users[i].username}
       email={users[0].email}
       />
       );
     })
   }
   </div>
     );
 }
 export default CardList;
