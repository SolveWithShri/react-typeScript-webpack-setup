import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const params = useParams();
  const { userId } = params;

  console.log({ params });

  return (
    <>
      <div>User Details</div>
      <h2>User {userId}</h2>
    </>
  );
};

export default UserDetails;
