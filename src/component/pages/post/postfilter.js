import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Loading } from '../moduls/loading'
import { PostCard } from './postcard'



export const PostFilterCard = ({ Title, body, userId, id , userFilter }) => {

    const [postsFilter, setPostsFilter] = useState([]);
    const [loading , setLoading] =useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userFilter)
            .then((result) => {
                setPostsFilter(result.data)
                setLoading(false)
            })
    }, [userFilter])


    return (
        <div>
        {loading ? <Loading /> : null }
            {postsFilter.map(postsFilter => <PostCard
                post={postsFilter}
                key={postsFilter.id}
            />)}

        </div>

    )
}
