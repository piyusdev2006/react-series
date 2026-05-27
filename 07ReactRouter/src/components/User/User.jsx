import React from 'react'
import { useParams } from "react-router";

function User() {
    const {userId} = useParams();
  return (
    <div className='text-center text-2xl font-medium py-10'>
      User : {userId}
    </div>
  )
}

export default User
