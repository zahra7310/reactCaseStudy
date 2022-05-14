import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import { BasePage } from '../../../BasePage'
import { UserForm } from './userform'

export const NewUser = () => {
  const user={
    name :'',
    username:'',
    email:''
  }

  const navigate = useNavigate();
  const NewUser=(user)=>{
    axios.post('https://jsonplaceholder.typicode.com/users' , user ).then((result)=>{
      navigate('/UsersPage' , {state : {newUser : result.data}})
    })
  }

  
  return (
    <BasePage Title={'New User'}>
      <UserForm userData={user} onSave={NewUser}/>
    </BasePage>
  )
}
