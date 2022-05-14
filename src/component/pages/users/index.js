import React from 'react'
import { BasePage } from '../../BasePage'
import { UsersTable } from './users-table'

export const UsersPage = () => {
  return (
    <BasePage Title="Users Page">
      <UsersTable />
    </BasePage>
  )
}
