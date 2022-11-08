import React from 'react'
import { useSelector } from 'react-redux'

const UserList = () => {
    const users = useSelector((state)=> state.users);
    console.log(users)

  return (
    <div>UserList</div>
  )
}

export default UserList