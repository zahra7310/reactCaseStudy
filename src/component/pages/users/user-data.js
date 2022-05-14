import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Confirm } from '../../confirm';
import { YesResult } from '../../confirm/constant.confirm';
import './user-tabel.css';

export const UserData = ({ id, name, username, email, onDelete }) => {

  const [showConfirm, setShowConfirm] = useState(false);

  const deleteMessage=<p>User <b>{name}</b> will be delete <br /> Are you sure ?</p>

  const resultHandler = (result) => {
    if (result === YesResult) {
      onDelete(id);
    }
    setShowConfirm(false)
  }

  const deleteHandler = () => {
    setShowConfirm(true)
  }

  return (
    <>
      {showConfirm ? <Confirm onResult={resultHandler} title='Delete User' message={deleteMessage}/> : null}
      <div className='title-data'>{name}</div>
      <div className='title-data' >{username}</div>
      <div className='title-data'>{email}</div>
      <div className='title-data action-data'>
        <button>
          <span className="material-icons" onClick={deleteHandler}>delete</span>
        </button>
        <Link to={`edit/${id}`}>
          <span className="material-icons">edit</span>
        </Link>
      </div>
    </>
  )
}

