import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BasePage } from '../../BasePage'

export const Tutorials = () => {
    return (
        <div>
            <BasePage Title={"Tutorials"}>
                <div className='row'>
                    <div className='col-3'>
                        <nav className='aside-nav'>
                            <ul>
                                <li>
                                    <Link to='/tutorials/moduls'>React Moduls</Link>
                                </li>

                                <li>
                                    <Link to='/tutorials/ClassComponentPage'>React Moduls Class</Link>
                                </li>

                                <li>
                                    <Link to='/tutorials/lifecycle'>React Component Lifecycle</Link>
                                </li>

                                <li>
                                    <Link to='/tutorials/FunctionComponent'>React Moduls Function</Link>
                                </li>

                                <li>
                                    <Link to='/tutorials/ReactHook'>React Hook</Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <div className='col-9'>
                        <Outlet />
                    </div>
                </div>
            </BasePage>
        </div>
    )
}
