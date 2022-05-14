import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BasePage } from '../../BasePage'
import { Loading } from '../moduls/loading';
import { PostCard } from './postcard';
import { PostFilterCard } from './postfilter';

export const PostPage = () => {

  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)
  const [postUserOne, setPostUserOne] = useState(false)
  const [userFilters, setUserFilters] = useState([])


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((result) => {
        setPost(result.data)
        setLoading(false)
      })
  })

  return (

    //  <BasePage Title={'PostPage'}>
    //   {loading ? <Loading /> : null }
    //   {post.map(post => <PostCard 
    //     key={post.id}
    //     Title={post.title} 
    //     body={post.body} 
    //     userId={post.userId} 
    //     id ={post.id} 
    //       />)}
    //  </BasePage>

    <BasePage Title={'PostPage'}>
      {loading ? <Loading /> : null}
      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '20px ' }}>
        <div style={{}}>
          <button onClick={()=>{
            setPostUserOne(!postUserOne);
            setUserFilters(1)
          }}>userId:1</button>
          <button onClick={()=>{
            setPostUserOne(!postUserOne);
            setUserFilters(2)
          }}>userId:2</button>
        </div>


        <div>
          {postUserOne ?

            (<PostFilterCard
              key={post.id}
              Title={post.title}
              body={post.body}
              userId={post.userId}
              id={post.id}
              userFilter={userFilters}
            />)
            :
            (post.map(post => <PostCard key={post.id} post={post} />))
          }
        </div>
      </div>
    </BasePage>

  )
}
