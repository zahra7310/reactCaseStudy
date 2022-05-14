import React from 'react'
import { ClassComponent, ClassComponent1, ClassComponent2, ClassComponent4 } from '../../../react-component/class-component'
import { BasePage } from '../../BasePage'

export const ClassComponentPage = () => {
  return (
    <BasePage Title='Class Component'>
      <ClassComponent />
      <ClassComponent1 massage='class component' setion='1'/>
      <ClassComponent2 massage='class component handler' />
      <ClassComponent4 massage='class componenth togglee' />
    </BasePage>
  )
}
