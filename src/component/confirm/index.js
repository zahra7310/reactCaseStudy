import React from 'react'
import styles from './confirm.module.css'
import { NoResult, YesResult } from './constant.confirm'

export const Confirm = ({ onResult , title , message}) => {

    const yesHandler =()=>{
        onResult(YesResult)
    }
    const noHandler =()=>{
        onResult(NoResult)
    }

    return (
        <div className={styles.confirmWrapper}>
            <div className={styles.confirmDialog}>
                <div className={styles.closeDialog}>
                   <span className="material-icons" onClick={noHandler}>close</span> 
                </div>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.body}>
                    <p>{message}</p>
                </div>
                <div className={styles.footer}>
                    <button onClick={yesHandler}>{YesResult}</button>
                    <button onClick={noHandler}>{NoResult}</button>
                </div>
            </div>
        </div>
    )
}
