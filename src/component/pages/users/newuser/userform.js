import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Confirm } from '../../../confirm'
import { YesResult } from '../../../confirm/constant.confirm'
import './newuser.css'

export const UserForm = ({ userData, onSave }) => {
  const navigate = useNavigate()
  const [is, setIs] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: ''
  })

  const submitHandler = (e) => {
    e.preventDefault()
    // navigate(-1);

    onSave(user)
  }
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setIs(true);
  }

  const canselHandler = () => {
    if (is) {
      setShowConfirm(true);
      console.log(showConfirm)
    } else {
      navigate('/UsersPage')
    }
  }

  const onResultHandler = (result) => {
    if (result === YesResult) {
      navigate('/UsersPage')
    } else {
      setShowConfirm(false);
    }

  }

  useEffect(() => {
    setUser(userData)

  }, [userData])

  return (
    <>
      {showConfirm ? <Confirm title={'Save user'} message={'Data may be lost ,Do you want to exit ?'} onResult={onResultHandler} /> : null}
      <div className='form-wraper'>
        <form className='form-control' onSubmit={submitHandler} noValidate>
          <label>Name</label>
          <input type={'text'}
            id='name'
            name='name'
            value={user.name}
            onChange={onChangeHandler}
          />
          <label>User Name</label>
          <input type={'text'}
            id='username'
            name='username'
            value={user.username}
            onChange={onChangeHandler}
          />
          <label>Email</label>
          <input
            type={'email'}
            id='email'
            name='email'
            value={user.email}
            onChange={onChangeHandler}
          />
          <div className='action'>
            <input type={'submit'} value={'SAVE'} className='submit-control' />
            <button className='cancel' onClick={canselHandler} type={'button'}> CANSEL </button>
          </div>
        </form>
        

      </div>
    </>

  )
}
