import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useEffect , useState  } from 'react'
import { BasePage } from '../../../BasePage'
import { UserForm } from '../newuser/userform'
import axios from 'axios'

export const EditUser = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [user , setUser] = useState({
     name :'',
     username:'',
     email :''
  })

  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users/"+ id).then((result)=>{
         setUser(result.data)
      })     
  },[id])

 const NewUser =(user)=>{
     axios.put('https://jsonplaceholder.typicode.com/users/' + id , user).then((result)=>{
     navigate('/UsersPage' , {state : { editUser : result.data }})
     })  
 }

  return (
    <BasePage Title={'Edit User'} >
      <UserForm userData={ user } onSave={NewUser} />
    </BasePage>
  )
}
