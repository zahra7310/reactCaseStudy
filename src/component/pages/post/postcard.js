import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'


export const PostCard = ({ post }) => {

  const [userName, setUserName] = useState('');


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/' + post.userId)
      .then((result) => {
        setUserName(result.data.username)
      })
  },[post.userId])

  

  return (
      <div style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '16px 50px ' }}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>userId :{post.userId}</p>
        <em>by {userName} </em>
      </div>
  )
}


// export const PostCard = ({Title , body , userId , id }) => {
//  const [userName , setUserName] = useState('');
//  useEffect(()=>{
//    axios.get('https://jsonplaceholder.typicode.com/users/'+ userId )
//    .then((result)=>{
//      setUserName(result.data.username)
//    })
//  })
